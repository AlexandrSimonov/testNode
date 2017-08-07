import app from "../app";
import Subscribes from "../modeles/subscribes";

app.post("/subscribes/subs", (req, res) => {
  const { firstName, lastName, email } = req.body;
  console.log("АЛО");
  Subscribes.create({
    firstName,
    lastName,
    email,
    payments: []
  }).then(data => {
    if (data) {
      console.log("АЛО 2");
      res.render("layout", { partials: { content: "subs" } });
    } else {
      console.log("АЛО 3");
      res.render("layout", { partials: { content: "subs" } });
    }
  });
});
