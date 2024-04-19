const BaseError = require("./BaseError");
const { StatusCodes } = require('http-status-codes');

class NotFoundError extends BaseError {
    constructor(propertyName, propertyVal) {
        super("NotFoundError", StatusCodes.NOT_FOUND, `The requested resource ${propertyName} with value ${propertyVal} not found.`, { propertyName, propertyVal });
    }
}

module.exports = NotFoundError;