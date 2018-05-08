var mysql = require('mysql');
const express = require('express');
const router = express.Router();

router.post('/settingUpdate', (req, res)=> {
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'cems',
        port: 3306
    })
    connection.connect();
    var arr = Object.keys(req.body).map(function (key) {
        return req.body[key];
    });

    connection.query('UPDATE users SET username=?,usercompany=?, userschool=? where userphone=?', arr, function (err, result) {
        res.send(result);
        if (err) {
            console.log('err');
            return;
        }
    });
});
module.exports = router;