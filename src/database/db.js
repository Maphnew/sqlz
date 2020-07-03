const { Sequelize, Model, DataTypes  } = require('sequelize');
const { User } = require('../modelsExample/user')

const findUser = async(req) => {
    try {
        console.log(req)

        const jane = await User.create(req)
        console.log(jane.toJSON());
        console.log(JSON.stringify(jane, null, 4));
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}

module.exports = findUser