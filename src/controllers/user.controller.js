const { UserService } = require('../services');
const { UserRepository } = require('../repositories');
const NotImplemented = require('../errors/NotImplementedError');
const { StatusCodes } = require('http-status-codes');

const user = new UserService(new UserRepository);
function ping(req, res) {
    return res.json({ message: "Ping back from User Controller." });
}

async function addUser(req, res, next) {
    try {
        const newUser = await user.createUser(req.body);
        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: "User Successfully Created.",
            error: {},
            data: newUser
        });
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