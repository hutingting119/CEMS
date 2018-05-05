var mysql = require('mysql');
const express = require('express');
const router = express.Router();

router.post('/checkPassword', (req, res)=> {

    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'cems',
        port: 3306
    });
    connection.connect();
    var phone = req.body.loginPhone;
    connection.query('select userpassword from users where userphone',phone, function (err, result) {
        res.send(result[0].userpassword);
    });
});

module.exports = router;
