const NotImplemented = require("../errors/NotImplementedError");

function ping(req, res) {
    return res.json({ message: "Ping back from Topics Controller." });
}

function addTopic(req, res, next) {
    try {
        throw new NotImplemented("Add Topic");
    } catch (error) {
        next(error);
    }
}

function getTopics(req, res, next) {
    try {
        throw new NotImplemented("Get Topics");
    } catch (error) {
        next(error);
    }
}

module.exports = {
    ping,
    addTopic,
    getTopics
}