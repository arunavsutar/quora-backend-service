const NotImplemented = require("../errors/NotImplementedError");
const { TopicService } = require("../services");
const { TopicRepository } = require("../repositories");
const { StatusCodes } = require('http-status-codes');

const topic = new TopicService(new TopicRepository);

function ping(req, res) {
    return res.json({ message: "Ping back from Topics Controller." });
}

async function addTopic(req, res, next) {
    try {
        const newTopic = await topic.createTopic(req.body);
        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: "Topic added Succesfully.",
            error: {},
            data: newTopic
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
}

async function getTopics(req, res, next) {
    try {
        const topics = await topic.getTopics();
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Retrieved all Topics.",
            error: {},
            data: topics
        });
    } catch (error) {
        next(error);
    }
}

module.exports = {
    ping,
    addTopic,
    getTopics
}