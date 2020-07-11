const validator = require("validator");

const isValidString = require("./isValidString");

/**
 * @function registerValidator
 * @param {object} body - request body
 * @returns {object} errors and if request body is valid
 */
module.exports = (body) => {
  const errors = {};

  body.handle = isValidString(body.handle) ? body.handle : "";
  body.email = isValidString(body.email) ? body.email : "";
  body.password = isValidString(body.password) ? body.password : "";

  if (!body.handle.length) {
    errors.handle = "A handle is required";
  } else if (body.handle.length < 2 || body.handle.length > 30) {
    errors.handle = "A handle must be between 2 and 30 characters";
  } else if (!body.handle.match(/^[a-zA-Z0-9_-]+$/)) {
    errors.handle = "A handle can only contain a-z, A-Z, - and _";
  }
  if (!body.email.length) {
    errors.email = "An email is required";
  } else if (!validator.isEmail(body.email)) {
    errors.email = "Email is invalid";
  }

  if (!body.password.length) {
    errors.password = "A password is required";
  } else if (body.password.length < 8) {
    errors.password = "Password is at least 8 characters long";
  }

  return {
    errors,
    isValid: !Object.keys(errors).length,
  };
};
