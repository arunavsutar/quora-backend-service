const express = require('express');
const { commentController, likeController } = require('../../controllers');

const commentRouter = express.Router();

commentRouter.get('/ping', commentController.ping);
commentRouter.post('/:id/comments', commentController.commentAComment);
commentRouter.post('/:id/likes', likeController.likeAComment);

module.exports = commentRouter;