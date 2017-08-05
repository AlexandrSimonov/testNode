import LiqPay from "liqpay-sdk";
import app from "../app";
// import Subscribes from "../modeles/subscribes";

const liqpay = new LiqPay(
  "i72034753150",
  "ftuAp6YCwhV9zbFXsKXvsl5fTRY1LcvA2BGBpYdL"
);

const html = liqpay.cnb_form({
  action: "pay",
  amount: "0.01",
  currency: "UAH",
  order_id: "1",
  description: "Подписка на рассылку",
  version: "3"
});

app.get("/payment", (req, res) => {
  res.render("layout", {
    form: html,
    partials: { content: "payment", footer: "partials/footer" }
  });
});
