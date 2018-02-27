var mysql=require('mysql');
var connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'test',
    port:3306
});
connection.connect();