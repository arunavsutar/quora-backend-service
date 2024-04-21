const { FollowService } = require("../services");
const { FollowRepository } = require("../repositories");
const { StatusCodes } = require('http-status-codes');

const Follows = new FollowService(new FollowRepository);

function ping(req, res) {
    return res.json({ message: "Ping back from Comments Controller." });
}

async function followUser(req, res, next) {
    try {
        const followed_user = await Follows.createFollow(req.params.id, req.params.target_id);
        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: "Follow Added Successfully to the Targetd User",
            error: {},
            data: followed_user
        });
    } catch (error) {
        next(error);
    }
}

module.exports = {
    ping,
    followUser
}