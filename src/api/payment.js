import LiqPay from "liqpay-sdk";

const liqpay = new LiqPay(
  process.env.api_liqpay_public_key,
  process.env.api_liqpay_private_key
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
    server_url: `${process.env.host}/payment/result`
  });
}
export default { generateForm, sign };
