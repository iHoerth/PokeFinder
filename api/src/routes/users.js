const { Router } = require('express');
const usersRouter = Router();
const { loginUserHandler, createUserHandler, fetchAllUsers} = require('../handlers/user');

usersRouter.get('/', fetchAllUsers)
usersRouter.post('/', loginUserHandler);
usersRouter.post('/create', createUserHandler);

module.exports = usersRouter;
