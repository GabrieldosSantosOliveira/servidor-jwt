const { User } = require('./../controllers/User');
const { Router } = require('express');
const routerUser = Router();

routerUser.post('/user', User.create);


module.exports = { routerUser };
