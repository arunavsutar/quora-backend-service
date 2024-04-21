const express = require('express');
const { answerController, commentController, likeController } = require('../../controllers');

const answerRouter = express.Router();

answerRouter.get('/ping', answerController.ping);
answerRouter.put('/:id', answerController.updateAnswer);
answerRouter.post('/:id/comments', commentController.commentAAnswer);
answerRouter.post('/:id/likes', likeController.likeAAnswer);

module.exports = answerRouter;