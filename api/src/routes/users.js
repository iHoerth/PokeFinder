const { Router } = require('express');
const usersRouter = Router();
const { loginUserHandler, createUserHandler } = require('../handlers/user');

usersRouter.post('/login', loginUserHandler);
usersRouter.post('/create', createUserHandler);

module.exports = usersRouter;
