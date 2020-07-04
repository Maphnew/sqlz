const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('user', 'root', '1234', {
  host: 'localhost',
  dialect: 'mariadb',
  logging: console.log,
});

module.exports = sequelize