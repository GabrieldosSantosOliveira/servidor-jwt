const { usuario } = require('./../../models');
const { encrypt } = require('./../utils/encrypt');
class User {
  static async index(req, res) {
    const users = await usuario.findAll();
    res.json(users);
  }
  static async create(req, res) {
    const { name, password, user } = req.body;
    await usuario.create({
      name,
      password: encrypt(password),
      user
    });
    res.status(201).json({
      message: 'Usuário criado com sucesso!'
    });
  }
  static async findAll(req, res) {
    const users = await usuario.findAll();
    res.render('user/All', { users });
  }
  static async createUser(req, res) {
    res.render('user/create');
  }
}
module.exports = { User };
