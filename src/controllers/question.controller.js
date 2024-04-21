const NotImplemented = require("../errors/NotImplementedError");
const { QuestionService } = require("../services");
const { QuestionRepository } = require("../repositories");
const { StatusCodes } = require('http-status-codes');

const Question = new QuestionService(new QuestionRepository);

function ping(req, res) {
    return res.json({ message: "Ping back from Questions Controller." });
}

async function postQuestion(req, res, next) {
    try {
        const newQuestion = await Question.createQuestion(req.body);
        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: "Question Added Successfully.",
            error: {},
            data: newQuestion
        })
    } catch (error) {
        next(error);
    }
}

async function getQuestions(req, res, next) {
    try {
        const questions = await Question.getQuestions(req.body);
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Question Retrieved Successfully.",
            error: {},
            data: questions
        })
    } catch (error) {
        next(error);
    }
}

module.exports = {
    ping,
    postQuestion,
    getQuestions
}