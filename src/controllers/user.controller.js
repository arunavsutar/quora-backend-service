const { StatusCodes } = require('http-status-codes');

function ping(req, res) {
    return res.json({ message: "Ping back from User Controller." });
}

function addUser(req, res) {
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({ message: "Not Implemented Yet.." });
}

function getUser(req, res) {
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({ message: "Not Implemented Yet.." });
}

function updateUser(req, res) {
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({ message: "Not Implemented Yet.." });
}



module.exports = {
    ping,
    addUser,
    getUser,
    updateUser
}