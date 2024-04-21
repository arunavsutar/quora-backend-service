const { AnswerService } = require("../services");
const { AnswerRepository } = require("../repositories");
const { StatusCodes } = require('http-status-codes');

const Answer = new AnswerService(new AnswerRepository);

function ping(req, res) {
    return res.json({
        message: "Ping back from Answers Controller."
    })
}

async function postAnswer(req, res, next) {
    try {
        const answer = await Answer.createAnswer(req.params.id, req.body);
        return res.status(StatusCodes.OK).json({
            success: true,
            message: 'Successfully Added the Answer.',
            error: {},
            data: answer
        });
    } catch (error) {
        next(error);
    }
}

async function updateAnswer(req, res, next) {
    try {
        const answer = await Answer.updateAnswer(req.params.id, req.body);
        return res.status(StatusCodes.OK).json({
            success: true,
            message: 'Successfully updated the Answer.',
            error: {},
            data: answer
        });
    } catch (error) {
        next(error);
    }
}

module.exports = {
    ping,
    postAnswer,
    updateAnswer
}