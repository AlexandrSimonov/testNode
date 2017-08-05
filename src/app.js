import express from "express";
import bodyParser from "body-parser";
import path from "path";
import cookieParser from "cookie-parser";
import i18n from "i18n-express";

const app = express();

app.set("view engine", "hjs");
app.set("views", path.join(__dirname, "views"));

app.use(cookieParser());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  i18n({
    translationsPath: path.join(__dirname, "i18n"),
    siteLangs: ["en", "ru"],
    textsVarName: "trs",
    defaultLang: "en",
    cookieLangName: undefined
  })
);

export default app;
