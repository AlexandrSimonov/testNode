import express from "express";
import bodyParser from "body-parser";
import mustacheExpress from "mustache-express";
import path from "path";

const app = express();

app.engine("mustache", mustacheExpress());

app.set("view engine", "mustache");
app.set("views", path.join(__dirname, "views"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

export default app;
