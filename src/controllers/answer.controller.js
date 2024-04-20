const NotImplemented = require("../errors/NotImplementedError")

function ping(req, res) {
    return res.json({
        message: "Ping back from Answers Controller."
    })
}

function postAnswer(req, res, next) {
    try {
        throw new NotImplemented("Post a Answer");
    } catch (error) {
        next(error);
    }
}

function updateAnswer(req, res, next) {
    try {
        throw new NotImplemented("Update a Answer");
    } catch (error) {
        next(error);
    }
}

module.exports = {
    ping,
    postAnswer,
    updateAnswer
}