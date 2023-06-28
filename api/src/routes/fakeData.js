const { Router } = require('express');
const { createFakeData } = require('../handlers/createFakeData');

const fakeDataRouter = Router();

fakeDataRouter.post('/', createFakeData);

module.exports = fakeDataRouter;
