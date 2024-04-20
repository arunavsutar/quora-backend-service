const { UserService } = require('../services');
const { UserRepository } = require('../repositories');
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

async function getUser(req, res, next) {
    try {
        const user_data = await user.getUser(req.params.id)
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "User Retrieved Successfully.",
            error: {},
            data: user_data
        })
    } catch (error) {
        next(error);
    }
}

async function updateUser(req, res, next) {
    try {
        const updatedUser = await user.updateUser(req.params.id, req.body);
        return res.status(StatusCodes.OK).json({
            success: true,
            message: 'Successfully updated the User.',
            error: {},
            data: updatedUser
        });
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