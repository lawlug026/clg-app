const express = require('express');
const sql = require('mysql');
const path = require('path');
var router = express.Router();
var config = require('./config');
// const jwt = require('jsonwebtoken');
var multer = require('multer');
var base64Img = require('base64-img');

// var upload = multer({ dest: 'uploads/' })

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + '.png')
    }
})

var upload = multer({ storage: storage })

router.use(express.static('public'));

var db_config = {
    host: 'localhost',
    user: 'root',
    password: 'notdefined',
    database: 'cbpgec'
};

var con;

function handleDisconnect() {
    con = sql.createConnection(db_config); // Recreate the connection, since
    // the old one cannot be reused.

    con.connect(function (err) {              // The server is either down
        if (err) {                                     // or restarting (takes a while sometimes).
            console.log('error when connecting to db:', err);
            setTimeout(handleDisconnect, 2000); // We introduce a delay before attempting to reconnect,
        }                                     // to avoid a hot loop, and to allow our node script to
    });                                     // process asynchronous requests in the meantime.
    // If you're also serving http, display a 503 error.
    con.on('error', function (err) {
        console.log('db error', err);
        if (err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to the MySQL server is usually
            handleDisconnect();                         // lost due to either server restart, or a
        } else {                                      // connnection idle timeout (the wait_timeout
            console.log(err);                                  // server variable configures this)
        }
    });
}

handleDisconnect();


setInterval(function () {
    con.query('SELECT 1');
}, 5000);


//Global Variables
var bearerCheck = function (req, res, next) {

    // var token = req.headers['authorization'];
    // if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });

    // jwt.verify(token, config.secret, function(err, decoded) {
    //   if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });

    //   next();
    // });

    var bear = req.headers.authorization;
    var bear = bear.substring(7, bear.length);
    var stmt2 = `select * from bearer where bear = '${bear}'`;
    con.query(stmt2, function (err, data) {
        if (err) console.log(err);
        else {
            if (!data[0]) {
                req.check = true;
                res.send(JSON.stringify({ msg: 'Access Denied' }));
            }
            else {
                req.check = false;
                next();
            }
        }
    });
}

router.post('/profile/:id', upload.single('avatar'), function (req, res, next) {
    // req.file is the `avatar` file
    // req.body will hold the text fields, if there were any
    console.log(req.file);
    base64Img.base64(path.join(__dirname, '../uploads', req.file.filename), (err, data) => {
        console.log(data);
        var insertData = {
            roll: req.params.id,
            file: data
        }
        con.query(`INSERT INTO profilePics SET ?`, insertData, function (err, result) {
            if (err) console.log(err);
            else {
                res.send(JSON.stringify({ file: data }))
            }
        });
        // res.send(JSON.stringify({ file : data }))
    })

    // res.sendFile(path.join(__dirname, '../uploads', req.file.filename));
    // res.sendFile(`../${req.file.path}`);
})

router.get('/profile/:id', (req, res, next) => {

    roll = req.params.id;
    var stmt = `select * from profilePics where roll = ${roll}`;
    con.query(stmt, (err, data) => {
        if (err) console.log(err);
        else {

            console.log(data[0]);
            res.send(JSON.stringify(data[0]));
        }
    })
})

// router.use(bearerCheck);


var today = new Date();

module.exports = router;