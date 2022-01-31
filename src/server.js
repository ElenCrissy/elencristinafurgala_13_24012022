let express = require('express')
let router = express.Router()
let path = require('path')
let fs = require('fs')
let MongoClient = require('mongodb').MongoClient

router.get('/signin', function(req, res, next) {
    res.render('/signin', {title : 'Cool'})
})

module.exports = router

app.get('/signin', function (req, res) {
    let response = {}
    MongoClient.connect('mongodb://localhost:27017', function(err, client) {
        if (err) throw err

        const db = client.db('argentBankDB')
        const query = { userId : 1 }
        db.collection('users').findOne(query, function (err, result) {
            if (err) throw err
            client.close()
            response.send(result)
            console.log(result)
        })
    })
})