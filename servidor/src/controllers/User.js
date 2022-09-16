const { usuario } = require('./../../models');

class User {
  static async index(req, res) {
    const users = await usuario.findAll();
    res.json(users);
  }
  static async create(req, res) {
    const { name, password, user } = req.body;
    const data = await usuario.create({ name, password, user });
    res.json(data);
  }
}
module.exports = { User };