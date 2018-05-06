var mysql=require('mysql');
var connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'cems',
    port:3306,
    charset: 'utf8_general_ci'
});
connection.connect();