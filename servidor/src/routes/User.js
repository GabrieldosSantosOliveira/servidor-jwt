const { User } = require('./../controllers/User');
const { Router } = require('express');
const routerUser = Router();

routerUser.post('/user', User.create);
routerUser.get('/user', User.findAll);
routerUser.get('/create', User.createUser);

module.exports = { routerUser };
