const { Sequelize } = require('sequelize');
const user = require('../models/user')

const sequelize = new Sequelize('user', 'root', '1234', {
    host: 'localhost',
    dialect: 'mariadb'
});

const findUser = async(req) => {
    try {
        console.log(req)
        await sequelize.authenticate();
        await sequelize.sync()
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}

module.exports = findUser