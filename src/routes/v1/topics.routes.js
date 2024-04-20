const express = require('express');
const { topicController } = require('../../controllers');

const topicRouter = express.Router();

topicRouter.get('/ping', topicController.ping);
topicRouter.post('/', topicController.addTopic);
topicRouter.get('/', topicController.getTopics);

module.exports = topicRouter;