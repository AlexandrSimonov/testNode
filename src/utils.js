import validate from "validate.js";

function validateEmail(email) {
  if (!validate.isDefined(email)) return false;
  return validate({ email }, { email: { email: true } }) === undefined;
}

export default { validateEmail };
