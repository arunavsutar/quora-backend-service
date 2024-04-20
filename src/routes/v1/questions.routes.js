const express = require('express');
const { questionController, answerController } = require('../../controllers');

const questionRouter = express.Router();

questionRouter.get('/ping', questionController.ping);
questionRouter.post('/', questionController.postQuestion);
questionRouter.get('/search', questionController.getQuestions);
questionRouter.post('/:id/answers', answerController.postAnswer);

module.exports = questionRouter;