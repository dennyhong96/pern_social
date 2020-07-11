/**
 * @function isValidString
 * @param {string} string - A text value
 * @returns {boolean} whether the text is of type string and length greater than 0
 */
module.exports = isValidString = (string) =>
  typeof string === "string" && string.trim().length > 0;
