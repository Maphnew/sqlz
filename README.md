# sqlz

- express + mariadb + sequelize

### 🚀 DB - MODEL - APP(router)

```javascript
// db
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('user', 'root', '1234', {
  host: 'localhost',
  dialect: 'mariadb',
  logging: console.log,
});

module.exports = sequelize
```
```javascript
// model
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
        ).then(() => {console.log('sync')})
})()

module.exports = {
    User
}
```
```javascript
// app(router)
const express = require('express')
const { User } = require('../models/user')

const router = new express.Router()

// Create user
router.post('/users', async (req, res) => {
    try {
        const user = await User.create(req.body)
        console.log(user.toJSON());
        // console.log(JSON.stringify(user, null, 4));
        res.status(201).send(user)
    } catch (e) {
        res.status(400).send(e)
    }
})

// Login
router.post('/login', async(req,res) => {
    console.log('POST /login', req.body)
    try {
        const user = await User.findOne({ where: { userID: req.body.userID } });
        if(user === null) {
            return res.status(400).send({msg: 'Unable to find the user'})
        }
        console.log(user.toJSON());
        // console.log(JSON.stringify(user, null, 4));

        
        res.status(201).send(user)
    } catch (e) {
        res.status(400).send(e)
    }
})

module.exports = router
```