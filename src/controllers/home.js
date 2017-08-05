import app from "../app";

app.get("/", (req, res) => {
  res.render("layout", { partials: { content: "home" } });
});
