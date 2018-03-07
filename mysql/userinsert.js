var mysql = require('mysql');
const express = require('express');
const router = express.Router();

router.post('/userinsert', (req, res)=> {
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'cems',
        port: 3306
    });
    connection.connect();
    var addSql='INSERT INTO users(userphone, username, usercompany,userschool,userpassword) VALUES(?,?,?,?,?)';
    var addSqlParams=Object.keys(req.body).map(function (key) {
        return req.body[key];
    });
    console.log(addSqlParams);
    connection.query(addSql,addSqlParams, function (err, result) {
        if (err) {
            console.log('inserterr');
            return;
        }
        res.send(result);
    });
});

module.exports = router;
