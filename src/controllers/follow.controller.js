const NotImplemented = require("../errors/NotImplementedError");

function ping(req, res) {
    return res.json({ message: "Ping back from Comments Controller." });
}

function followUser(req, res, next) {
    try {
        throw new NotImplemented("Follow functionality");
    } catch (error) {
        next(error);
    }
}

module.exports = {
    ping,
    followUser
}