'use strict';

const { Sequelize, DataTypes  } = require('sequelize');
const sequelize = require('../database/db')

const User = sequelize.define('User', {
        userID: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING
        },
        myPlaces: {
            type: DataTypes.JSON
        }
    }, {
        timestamps: true
    }, {
        tableName: 'User'
    }
    // {
    //     freezeTableName: true
    // }

);

(async () => {
    await User.sync(
         // { force: true }
        ).then(() => {console.log('User sync')})
})();

module.exports = {
    User
}