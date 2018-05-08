const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = new express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const userinsert = require("./mysql/userinsert");
const checkPhone=require('./mysql/checkPhone');
const checkPassword=require('./mysql/checkPassword');
const del=require('./mysql/del');
const updates=require('./mysql/updates');
const insertPost=require('./mysql/insertPost');
const allPost=require('./mysql/allPost');
const allRecruitment=require('./mysql/allRecruitment');
const selectCompany=require('./mysql/selectCompany');
const settingUpdate=require('./mysql/settingUpdate');
const delPost=require('./mysql/delPost');

app.use(express.static('public'));

app.use("/", userinsert);
app.use('/',checkPhone);
app.use('/',del);
app.use('/',updates);
app.use('/',checkPassword);
app.use('/',insertPost);
app.use('/',allPost);
app.use('/',allRecruitment);
app.use('/',selectCompany);
app.use('/',settingUpdate);
app.use('/',delPost);

var server = app.listen(3000, () => {
    console.log('listening at port %s', server.address().port);
});

module.exports = server;