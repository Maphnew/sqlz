'use strict';

const { Sequelize, DataTypes  } = require('sequelize');

const sequelize = new Sequelize('user', 'root', '1234', {
    host: 'localhost',
    dialect: 'mariadb',
    ogging: console.log
});

const User = sequelize.define('User', {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING
        }
    }, {
        timestamps: true
    }, {
        freezeTableName: true
    }
);

(async () => {
    await User.sync().then(() => {console.log('Good')})
})().then(async() => {
    // const jane = await User.create({
    //     "firstName":"ksc2",
    //     "lastName":"12345"
    // })
    // console.log(jane.toJSON());
    // console.log(JSON.stringify(jane, null, 4));
})

module.exports = {
    User
}