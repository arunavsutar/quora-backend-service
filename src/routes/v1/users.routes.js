const express = require('express');
const { userController } = require('../../controllers');

const userRouter = express.Router();

userRouter.get('/ping', userController.ping);
userRouter.post('/', userController.addUser);
userRouter.get('/:id', userController.getUser);
userRouter.put('/:id', userController.updateUser);


module.exports = userRouter;