var mysql = require('mysql');
const express = require('express');
const router = express.Router();

router.post('/updates', (req, res)=> {
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'userManger',
        port: 3306
    })
    connection.connect();
    var arr = Object.keys(req.body).map(function (key) {
        return req.body[key];
    });
    arr.push(arr[0]), arr.splice(0, 1);
    connection.query('UPDATE users SET name=?,age=?, sex=?,phone=?,email=?,remark =? where id=?', arr, function (err, result) {
        if (err) {
            console.log('err');
            return;
        }
        console.log('UPDATE affecteRoes', result.affectedRows);
    });
});
module.exports = router;