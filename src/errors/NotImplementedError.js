const { StatusCodes } = require("http-status-codes");
const BaseError = require("./BaseError");

class NotImplemented extends BaseError {
    constructor(methodName) {
        super("NotImplemented", StatusCodes.NOT_IMPLEMENTED, `${methodName} Not Implemented.`, {Method:methodName,status :"Not Implemented"});
    }
}


module.exports = NotImplemented;