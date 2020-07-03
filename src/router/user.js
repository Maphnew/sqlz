const express = require('express')
const findUser = require('../database/db')

const router = new express.Router()

router.post('/login', async(req,res) => {
    console.log(req.body)
    findUser(req.body)
    res.status(200).send(req.body)
})

module.exports = router