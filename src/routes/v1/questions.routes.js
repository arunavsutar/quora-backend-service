const express = require('express');
const { questionController } = require('../../controllers');

const questionRouter = express.Router();

questionRouter.get('/ping', questionController.ping);
questionRouter.post('/',questionController.postQuestion);
questionRouter.get('/',questionController.getQuestions);

module.exports = questionRouter;