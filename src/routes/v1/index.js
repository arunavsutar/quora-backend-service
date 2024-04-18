const express = require('express');
const userRouter = require('./users.routes');



const v1router = express.Router();

v1router.use('/users', userRouter);

module.exports = v1router;