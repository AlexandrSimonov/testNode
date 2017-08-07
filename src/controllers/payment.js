import app from "../app";
import payment from "../api/payment";
import utils from "../utils";
import Subscribes from "../modeles/subscribes";

app.get("/payment", (req, res) => {
  const email = req.query.email;

  if (!utils.validateEmail(email)) {
    res.render("layout", {
      message:
        "Что-то пошло не так. Обратитесь в поддержку, написав на почту soniatech@gmail.com",
      partials: { content: "payment" }
    });
    return;
  }

  res.render("layout", {
    form: payment.generateForm(email),
    partials: { content: "payment" }
  });
});

app.post("/payment/result", req => {
  if (payment.sign(req.body.data) === req.body.signature) {
    const email = JSON.parse(req.body.info).email;
    Subscribes.update({ email }, (payment: true));
  }
});
