import app from "../app";
import Subscribes from "../modeles/subscribes";
import utils from "../utils";

app.post("/subscribes/subs", (req, res) => {
  const { firstName, lastName, email } = req.body;

  if (!utils.validateEmail(email)) {
    res.render("layout", {
      message: "Не подпустимый email",
      err: true,
      partials: { content: "subs" }
    });
  }

  if (!utils.validateName(firstName)) {
    res.render("layout", {
      message: "Не допустимое имя",
      err: true,
      partials: { content: "subs" }
    });
  }

  if (!utils.validateName(lastName)) {
    res.render("layout", {
      message: "Не достимая фамилия",
      err: true,
      partials: { content: "subs" }
    });
  }

  Subscribes.create({
    firstName,
    lastName,
    email,
    payment: false
  }).then(data => {
    if (data) {
      res.render("layout", {
        message: "Спасибо за подписку",
        partials: { content: "subs" }
      });
    } else {
      res.render("layout", {
        message: "Попробуйте позже",
        err: true,
        partials: { content: "subs" }
      });
    }
  });
});
