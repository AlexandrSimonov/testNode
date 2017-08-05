import app from "../app";
import Subscribes from "../modeles/subscribes";

app.get("/subscribes/getAll", (req, res) => {
  Subscribes.find({}, (err, data) => {
    res.send(JSON.stringify(data));
  });
});

app.post("/subscribes/subs", (req, res) => {
  const { firstName, lastName, email } = req.body;

  Subscribes.create({ firstName, lastName, email });

  res.render("thanksSub");
});
