var mysql = require('mysql');
const express = require('express');
const router = express.Router();

router.post('/insertPost', (req, res)=> {
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'cems',
        port: 3306,
        charset: 'utf8_general_ci'
    });
    connection.connect();
    var addSql = 'INSERT INTO post(userphone,title, body, label,readed,comments,author,time,school,company) VALUES(?,?,?,?,?,?,?,?,?,?)';
    var addSqlParams = Object.keys(req.body).map(function (key) {
        return req.body[key];
    });
    connection.query(addSql, addSqlParams, function (err, result) {

        if (err) {
            return;
        }
        res.send(result);
    });
});

module.exports = router;
