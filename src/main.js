import app from "./app";
import "./controllers";

// 404
app.use((req, res) => {
  res.status(404).render("err404");
});

app.listen(process.env.port, () => {
  console.log("Example app listening on port 3000!");
});
