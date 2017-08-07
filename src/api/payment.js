import LiqPay from "liqpay-sdk";

const liqpay = new LiqPay(
  "i72034753150",
  "ftuAp6YCwhV9zbFXsKXvsl5fTRY1LcvA2BGBpYdL"
);

function sign(data) {
  return liqpay.str_to_sign(data);
}

function generateForm(email) {
  return liqpay.cnb_form({
    action: "pay",
    amount: "320",
    currency: "UAH",
    order_id: "1",
    sandbox: "1",
    description: "Подписка на рассылку",
    version: "3",
    info: JSON.stringify({ email }),
    server_url: "http://localhost:3040/payment/result"
  });
}
export default { generateForm, sign };
