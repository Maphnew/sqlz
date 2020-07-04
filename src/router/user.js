const express = require('express')
const { User } = require('../models/user')
const { Place } = require('../models/place')
const sequelize = require('../database/db')
const { QueryTypes } = require('sequelize');

const router = new express.Router()

// Create user
router.post('/users', async (req, res) => {
    try {
        const user = await User.create(req.body)
        console.log(user.toJSON());
        const userJSON =  user.toJSON()
        
        // console.log(JSON.stringify(user, null, 4));
        res.status(201).send(user)
    } catch (e) {
        res.status(400).send(e)
    }
})

// Raw Queries
router.get('/query', async (req, res) => {
    try{
        if(req.query.userID){
            const users = await sequelize.query("SELECT * FROM users WHERE userID = :userID;", {
                replacements: {userID: req.query.userID},
                type: QueryTypes.SELECT 
            });
            res.status(201).send(users)
        } else {
            const users = await sequelize.query("SELECT * FROM users;", { type: QueryTypes.SELECT });
            res.status(201).send(users)
        }
        
    } catch(e) {
        res.status(400).send(e)
    }
})

router.post('/places', async (req, res) => {
    try {
        const place = await Place.create(req.body)
        console.log(place.toJSON());
       
        // console.log(JSON.stringify(user, null, 4));
        res.status(201).send(place)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.post('/place', async (req, res) => {
    console.log('POST /place', req.body)
    try {
        const place = await Place.findOne({ where: { placeID: req.body.placeID } });
        if(place === null) {
            return res.status(400).send({msg: 'Unable to find the place'})
        }
        // console.log(user.toJSON());
        // console.log(JSON.stringify(user, null, 4));

        
        res.status(201).send({
            placeID: place.placeID,
            placeName: place.placeName
        })
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
        // console.log(user.toJSON());
        // console.log(JSON.stringify(user, null, 4));

        
        res.status(201).send({
            userID: user.userID,
            myPlaces: user.myPlaces
        })
    } catch (e) {
        res.status(400).send(e)
    }
})

module.exports = router