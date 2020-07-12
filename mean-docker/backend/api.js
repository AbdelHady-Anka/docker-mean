const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const cors = require('cors');
var con = mysql.createConnection({
    host: "database",
    user: "m",
    port: '3306',
    password: "password",
    database: "mean",
    charset  : 'utf8'
});
var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
}

// initial connection
con.connect(function(err) {
    if(err) console.log(err);
});

// our simple get /jobs API
router.get('/jobs', cors(corsOptions), (req, res) => {
    con.query("SELECT * FROM jobs", function (err, result, fields) {
        console.log(err);
        if (err) res.send(err);
        res.send(result);
        console.log(result);
    });
});

module.exports = router;