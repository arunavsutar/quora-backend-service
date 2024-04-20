const express = require('express');
const { answerController } = require('../../controllers');

const answerRouter = express.Router();

answerRouter.get('/ping', answerController.ping);
answerRouter.put('/:id', answerController.updateAnswer);

module.exports = answerRouter;