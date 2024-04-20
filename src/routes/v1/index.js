const express = require('express');
const userRouter = require('./users.routes');
const questionRouter = require('./questions.routes');



const v1router = express.Router();

v1router.use('/users', userRouter);
v1router.use('/questions', questionRouter);

module.exports = v1router;