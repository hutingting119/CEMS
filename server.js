const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = new express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const userinsert = require("./mysql/userinsert");
const checkPhone=require('./mysql/checkPhone');
const del=require('./mysql/del');
const updates=require('./mysql/updates');

app.use(express.static('public'));

app.use("/", userinsert);
app.use('/',checkPhone);
app.use('/',del);
app.use('/',updates);

var server = app.listen(3000, () => {
    console.log('listening at port %s', server.address().port);
});

module.exports = server;