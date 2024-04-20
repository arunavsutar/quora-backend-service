const express = require('express');
const userRouter = require('./users.routes');
const questionRouter = require('./questions.routes');
const answerRouter = require('./answers.routes');
const commentRouter = require('./comments.routes');
const topicRouter = require('./topics.routes');



const v1router = express.Router();

v1router.use('/users', userRouter);
v1router.use('/questions', questionRouter);
v1router.use('/answers', answerRouter);
v1router.use('/comments', commentRouter);
v1router.use('/topics', topicRouter);

module.exports = v1router;