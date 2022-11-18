'use strict';
const { encrypt } = require('./../src/utils/encrypt');
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'usuarios',
      [
        {
          name: 'John Doe',
          password: encrypt('123'),
          user: 'john'
        },
        {
          name: 'Picolo',
          password: encrypt('123'),
          user: 'luiz'
        }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('usuarios', null, {});
  }
};
