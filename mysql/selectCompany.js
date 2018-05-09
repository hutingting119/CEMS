var mysql = require('mysql');
const express = require('express');
const router = express.Router();

router.post('/selectCompany', (req, res)=> {

    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'cems',
        port: 3306,
        charset: 'utf8_general_ci'
    });
    connection.connect();
    var company = req.body.company;
    connection.query('select * from company where name=?', company, function (err, result) {
        if (err) {
            console.log('allPost');
            return;
        }
        res.send(result);
    });
})

router.post('/insertCompany', (req, res)=> {
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'cems',
        port: 3306,
        charset: 'utf8_general_ci'
    });
    connection.connect();
    var addSql = 'INSERT INTO company(name, body, exHiring,hasHiring) VALUES(?,?,?,?)';
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

router.post('/delCompany', (req, res)=> {
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'cems',
        port: 3306,
    });
    connection.connect();
    var delId = req.body.id;
    connection.query('DELETE FROM company where id=?', delId, function (err, result) {
        if (err) {
            return;
        }
        res.send(200);
    });
});

module.exports = router;
