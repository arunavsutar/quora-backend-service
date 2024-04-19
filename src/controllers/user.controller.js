const { StatusCodes } = require('http-status-codes');
const NotImplemented = require('../errors/NotImplementedError');

function ping(req, res) {
    return res.json({ message: "Ping back from User Controller." });
}

function addUser(req, res, next) {
    try {
        throw new NotImplemented("Add User");
    } catch (error) {
        next(error);
    }
}

function getUser(req, res, next) {
    try {
        throw new NotImplemented("Get User");
    } catch (error) {
        next(error);
    }
}

function updateUser(req, res, next) {
    try {
        throw new NotImplemented("Update User");
    } catch (error) {
        next(error);
    }
}



module.exports = {
    ping,
    addUser,
    getUser,
    updateUser
}