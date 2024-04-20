const NotImplemented = require("../errors/NotImplementedError");

function ping(req, res) {
    return res.json({ message: "Ping back from Comments Controller." });
}

function like(req, res, next) {
    try {
        throw new NotImplemented("Like functionality");
    } catch (error) {
        next(error);
    }
}

module.exports = {
    ping,
    like
}