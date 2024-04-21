const express = require('express');
const { userController, followController } = require('../../controllers');

const userRouter = express.Router();

userRouter.get('/ping', userController.ping);
userRouter.post('/', userController.addUser);
userRouter.get('/:id', userController.getUser);
userRouter.put('/:id', userController.updateUser);
userRouter.post('/:id/follow/:target_id', followController.followUser);

module.exports = userRouter;