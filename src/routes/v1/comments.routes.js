const express = require('express');
const { commentController } = require('../../controllers');

const commentRouter = express.Router();

commentRouter.get('/ping', commentController.ping);
commentRouter.post('/:id/comments', commentController.commentAComment);


module.exports = commentRouter;