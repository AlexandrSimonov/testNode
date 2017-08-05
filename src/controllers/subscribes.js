import app from "../app";
import Subscribes from "../modeles/subscribes";

app.get("/subscribes/getAll", (req, res) => {
  Subscribes.find({}, (err, data) => {
    res.send(JSON.stringify(data));
  });
});

app.post("/subscribes/subs", (req, res) => {
  const { firstName, lastName, email } = req.body;

  Subscribes.create({
    firstName,
    lastName,
    email,
    payments: []
  }).then(data => {
    if (data) {
      res.render("subs", { message: "Всё окей" });
    } else {
      res.render("subs", {
        error: "Произошла ошибка. Попытайтесь повторить позже"
      });
    }
  });
});
