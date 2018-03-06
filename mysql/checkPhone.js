var mysql = require('mysql');
const express = require('express');
const router = express.Router();

router.post('/checkPhone', (req, res)=> {

    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'cems',
        port: 3306
    });
    connection.connect();
    connection.query('select * from users', function (err, result) {
        // if (err) {
        //     console.log('showerr');
        //     return;
        // }
        res.send(result);
        // console.log(result);
        // res.send(200);
    });
});

module.exports = router;
