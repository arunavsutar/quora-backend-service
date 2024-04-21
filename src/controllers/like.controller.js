const { LikeService } = require("../services");
const { LikeRepository } = require("../repositories");
const { StatusCodes } = require('http-status-codes');

const Likes = new LikeService(new LikeRepository);

function ping(req, res) {
    return res.json({ message: "Ping back from Comments Controller." });
}

async function likeAQuestion(req, res, next) {
    try {
        const liked_val = await Likes.createLike("question", req.params.id, req.body.user_id);
        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: "Like Added Successfully to the Question",
            error: {},
            data: liked_val
        });
    } catch (error) {
        next(error);
    }
}

async function likeAAnswer(req, res, next) {
    try {
        const liked_val = await Likes.createLike("answer", req.params.id, req.body.user_id);
        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: "Like Added Successfully to the Answer.",
            error: {},
            data: liked_val
        });
    } catch (error) {
        next(error);
    }
}

async function likeAComment(req, res, next) {
    try {
        const liked_val = await Likes.createLike("comment", req.params.id, req.body.user_id);
        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: "Like Added Successfully to the Comment.",
            error: {},
            data: liked_val
        });
    } catch (error) {
        next(error);
    }
}

module.exports = {
    ping,
    likeAQuestion,
    likeAAnswer,
    likeAComment
}