// JWT
require("dotenv-safe").config();
const jwt = require('jsonwebtoken');

class Auth {
  static async authentication(req, res) {
    res.render('autenticar');
  }
  static async home(req, res) {
    res.render("home")
  }
  static async login(req, res) {
    if (req.body.user === 'luiz' && req.body.password === '123') {
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
    res.json({ deslogado: true })
  }
}

module.exports = { Auth };