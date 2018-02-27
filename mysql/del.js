var mysql = require('mysql');
const express = require("express");
const router = express.Router();
router.post('/del', (req, res)=> {
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'userManger',
        port: 3306
    });
    connection.connect();
    var delId = req.body.id;
    connection.query('DELETE FROM users where id=?', delId, function (err, result) {
        if (err) {
            console.log('delerr');
            return;
        }
        res.send(200);
    });
});

module.exports = router;