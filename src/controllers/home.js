import app from "../app";

app.get("/", (req, res) => {
  res.render("home", { name: "Alex" });
});
