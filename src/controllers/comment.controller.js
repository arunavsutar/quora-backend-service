const NotImplemented = require("../errors/NotImplementedError");

function ping(req, res) {
    return res.json({ message: "Ping back from Comments Controller." });
}

function commentAAnswer(req, res, next) {
    try {
        throw new NotImplemented("Comment an Answer");
    } catch (error) {
        next(error);
    }
}

function commentAComment(req, res, next) {
    try {
        throw new NotImplemented("Comment a Comment");
    } catch (error) {
        next(error);
    }
}

module.exports = {
    ping,
    commentAAnswer,
    commentAComment
}