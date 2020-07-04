'use strict';

const { Sequelize, Model, DataTypes  } = require('sequelize');
const sequelize = require('../database/db')

class Place extends Model {}
Place.init({
    placeID: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    },
    placeName: {
        type: DataTypes.STRING,
    }
},{
    sequelize,
    modelName: 'Place'
})

Place.addHook('beforeValidate', (place, options) => {
    console.log('beforeValidate', place)
});

(async () => {
    await Place.sync(
         // { force: true }
        ).then(() => {console.log('Place sync')})
})();

module.exports = {
    Place
}