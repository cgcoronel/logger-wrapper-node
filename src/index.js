const { getCallerFile, getVersion } = require('./utils/callOrigin');

//Define numeric level number.
const levelMaps = {
  LOG: 0,
  DEBUG: 10,
  INFO: 20,
  WARN: 30,
  ERROR: 40,
  ALL: 50,
};

/**
 * Return a formatted log.
 * @param {string} code log description.
 * @param {object} value object or primitive to log.
 * @returns {}
 */
const format = (value, code) => {
  const dateEvent = new Date();

  return {
    level: Object.keys(levelMaps)[Object.values(levelMaps).indexOf(code)],
    version: getVersion(),
    time: dateEvent.toLocaleString(),
    file: getCallerFile(),
    message: value,
  };
};

/**
 * Return a formatted log.
 * @param {object} value object or primitive to log.
 * @returns {object}
 */
const all = (value) => console.log(JSON.stringify(format(value, 0)));

/**
 * Return a formatted log.
 * @param {object} value object or primitive to log.
 * @returns {object}
 */
const debug = (value) => console.log(JSON.stringify(format(value, 10)));

/**
 * Return a formatted log.
 * @param {object} value object or primitive to log.
 * @returns {object}
 */
const info = (value) => console.log(JSON.stringify(format(value, 20)));

/**
 * Return a formatted log.
 * @param {object} value object or primitive to log.
 * @returns {object}
 */
const warn = (value) => console.error(JSON.stringify(format(value, 30)));

/**
 * @param value error to be logged
 * @param {object} value object or primitive to log.
 * @returns {object} Return a formatted log.
 */
const error = (value) => console.log(JSON.stringify(format(value, 40)));

/**
 * @param {object} value object or primitive to log.
 * @returns {}
 */
const log = (value) => console.log(JSON.stringify(format(value, 0)));

module.exports = {
  log,
  all,
  debug,
  info,
  warn,
  error,
};

