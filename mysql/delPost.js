var mysql = require('mysql');
const express = require("express");
const router = express.Router();
router.post('/delPost', (req, res)=> {
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'cems',
        port: 3306,
    });
    connection.connect();
    var delId = req.body.id;
    connection.query('DELETE FROM post where id=?', delId, function (err, result) {
        if (err) {
            console.log('delerr');
            return;
        }
        res.send(200);
    });
});

router.post('/delRecruitment', (req, res)=> {
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'cems',
        port: 3306,
    });
    connection.connect();
    var delId = req.body.id;
    connection.query('DELETE FROM recruitment where id=?', delId, function (err, result) {
        if (err) {
            return;
        }
        res.send(200);
    });
});

module.exports = router;