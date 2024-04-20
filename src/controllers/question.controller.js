const NotImplemented = require("../errors/NotImplementedError");

function ping(req, res) {
    return res.json({ message: "Ping back from Questions Controller." });
}

function postQuestion(req, res, next) {
    try {
        throw new NotImplemented("Post a Question");
    } catch (error) {
        next(error);
    }
}

function getQuestions(req, res, next) {
    try {
        throw new NotImplemented("Search for Questions");
    } catch (error) {
        next(error);
    }
}

module.exports = {
    ping,
    postQuestion,
    getQuestions
}