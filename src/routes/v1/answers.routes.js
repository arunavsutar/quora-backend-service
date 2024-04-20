const express = require('express');
const { answerController, commentController } = require('../../controllers');

const answerRouter = express.Router();

answerRouter.get('/ping', answerController.ping);
answerRouter.put('/:id', answerController.updateAnswer);
answerRouter.post('/:id/comments', commentController.commentAAnswer);

module.exports = answerRouter;