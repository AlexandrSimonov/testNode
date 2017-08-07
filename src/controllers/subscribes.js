import app from "../app";
import Subscribes from "../modeles/subscribes";
import utils from "../utils";

function renderMessage(message, res) {
  res.locals = { message };
  res.render("layout", { partials: { content: "subs" } });
}

app.post("/subscribes/subs", (req, res) => {
  const { firstName, lastName, email } = req.body;

  if (!utils.validateEmail(email)) {
    renderMessage("Не допустимый email", res);
    return;
  }

  if (!utils.validateName(firstName)) {
    renderMessage("Не допустимое имя", res);
  }

  if (!utils.validateName(lastName)) {
    renderMessage("Не достимая фамилия", res);
  }

  Subscribes.create({
    firstName,
    lastName,
    email,
    payments: []
  }).then(data => {
    if (data) {
      renderMessage("Спасибо за подписку", res);
    } else {
      renderMessage("Попробуйте позже", res);
    }
  });
});
