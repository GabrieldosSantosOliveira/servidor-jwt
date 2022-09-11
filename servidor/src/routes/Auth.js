// JWT
const { Auth } = require('./../controllers/Auth');
const { Router } = require('express');
const routerAuth = Router();
routerAuth.get('/autenticar', Auth.authentication);

routerAuth.get('/', Auth.home);

routerAuth.post('/logar', Auth.login)

routerAuth.post('/deslogar', Auth.logout)
module.exports = { routerAuth };
