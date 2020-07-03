const { Sequelize, DataTypes  } = require('sequelize');

const sequelize = new Sequelize('user', 'root', '1234', {
    host: 'localhost',
    dialect: 'mariadb'
});


const User = sequelize.define('User', {
        // Model attributes are defined here
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING
            // allowNull defaults to true
        }
    }, {
        timestamps: true
    }
);

module.exports = {
    User
}