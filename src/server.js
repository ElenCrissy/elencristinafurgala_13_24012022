let express = require('express')
let router = express.Router()
let path = require('path')
let fs = require('fs')
let MongoClient = require('mongodb').MongoClient

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});


app.get('/signin', function (req, res) {
    let userObj = req.body
    MongoClient.connect('mongodb://admin:password@localhost:27017/', function(err, client) {
        if (err) throw err

        let db = client.db('argentBankDB')
        userObj['userid'] = 1

        let myquery = { userid: 1 }
        let newvalues = { $set: userObj }
        db.collection('users').update(myquery, newvalues, {upsert: true}, function (err, res) {
            if (err) throw err
            client.close()
            console.log('successfully added')
        })
    })
    res.send(userObj)
})

