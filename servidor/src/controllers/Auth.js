// JWT
require('dotenv-safe').config();
const jwt = require('jsonwebtoken');
const { decrypt } = require('./../utils/decrypt');
const { usuario } = require('./../../models');
class Auth {
  static async authentication(req, res) {
    res.render('autenticar');
  }
  static async home(req, res) {
    res.render('home');
  }
  static async login(req, res) {
    const { user, password } = req.body;
    const data = await usuario.findOne({ where: { user } });
    if (!data) {
      res
        .status(401)
        .json({ message: 'Usuário não encontrado!' });
    }
    console.log(
      decrypt('6a18143a62c306392fedd364d7c2aac9')
    );
    console.log(decrypt(data.password));
    if (
      user === data.user &&
      password === decrypt(data.password)
    ) {
      const id = 1;
      const token = jwt.sign({ id }, process.env.SECRET, {
        expiresIn: 300 // expires in 5min
      });

      res.cookie('token', token, { httpOnly: true });
      return res.json({ auth: true, token: token });
    }

    res.status(500).json({ message: 'Login inválido!' });
  }
  static async logout(req, res) {
    res.cookie('token', null, { httpOnly: true });
    res.json({ deslogado: true });
  }
}

module.exports = { Auth };
