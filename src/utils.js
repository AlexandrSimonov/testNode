import validate from "validate.js";

function validateEmail(email) {
  if (!validate.isDefined(email)) return false;
  return validate({ email }, { email: { email: true } }) === undefined;
}

function validateName(name) {
  return validate.isDefined(name);
}

export default { validateEmail, validateName };
