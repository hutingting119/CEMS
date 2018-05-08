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
    connection.query('select * from company where name=?',company, function (err, result) {
        if (err) {
            console.log('allPost');
            return;
        }
        res.send(result);
    });
});

module.exports = router;
