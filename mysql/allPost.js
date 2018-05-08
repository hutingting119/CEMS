var mysql = require('mysql');
const express = require('express');
const router = express.Router();

router.post('/allPost', (req, res)=> {

    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'cems',
        port: 3306,
        charset: 'utf8_general_ci'
    });
    connection.connect();
    connection.query('select * from post', function (err, result) {
        if (err) {
            return;
        }
        res.send(result);
    });
});

module.exports = router;
