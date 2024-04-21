const { CommentService } = require("../services");
const { CommentRepository } = require("../repositories");
const { StatusCodes } = require('http-status-codes');

const Comment = new CommentService(new CommentRepository);

function ping(req, res) {
    return res.json({ message: "Ping back from Comments Controller." });
}

async function commentAAnswer(req, res, next) {
    try {
        const comment = await Comment.comment("answer", req.params.id, req.body);
        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: 'Successfully Added the Comment to a Answer.',
            error: {},
            data: comment
        });
    } catch (error) {
        next(error);
    }
}

async function commentAComment(req, res, next) {
    try {
        const comment = await Comment.comment("comment", req.params.id, req.body);
        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: 'Successfully Added the Comment to a Comment.',
            error: {},
            data: comment
        });
    } catch (error) {
        next(error);
    }
}

module.exports = {
    ping,
    commentAAnswer,
    commentAComment
}