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
const insertPost=require('./mysql/insertPost');
const allPost=require('./mysql/allPost');
const allRecruitment=require('./mysql/allRecruitment');
const selectCompany=require('./mysql/selectCompany');
const settingUpdate=require('./mysql/settingUpdate');
const delPost=require('./mysql/delPost');
const allCompany=require('./mysql/allCompany');
const insertRecruitment=require('./mysql/insertRecruitment');

app.use(express.static('public'));

app.use("/", userinsert);
app.use('/',checkPhone);
app.use('/',del);
app.use('/',checkPassword);
app.use('/',insertPost);
app.use('/',allPost);
app.use('/',allRecruitment);
app.use('/',selectCompany);
app.use('/',settingUpdate);
app.use('/',delPost);
app.use('/',allCompany);
app.use('/',insertRecruitment);

var server = app.listen(3000, () => {
    console.log('listening at port %s', server.address().port);
});

module.exports = server;