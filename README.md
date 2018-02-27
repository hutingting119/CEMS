# userManagement
需求描述

我们需要一个基于 Web 的简单数据库维护工具，能够对用户信息（User）进行 CRUD 操作，我们需要：

有一个能够运行在浏览器中的前端界面
通过 Web API 的方式与后端服务交互
使用 MySQL 作为数据库
用户信息包括：用户名、姓名、年龄、性别、移动电话、电子邮件、备注


功能实现：

1.实现运行在浏览器的前端界面
2.通过 Web API 的方式实现与后端服务交互
3. 使用 MySQL 作为数据库
4. 使用 Git 作为控制版本，实现小步提交

运行方式：

1.git clone git@github.com:hutingting119/userManagement.git
2.npm install
3.node server.js

数据库：

mysql -u root -p （打开数据库）
create database userManger；（创建数据库）
use userManger; (使用数据库)
create table users (id int(4) not null primary key auto_increment,name char(20) not null,sex char(10),phone int(20),email char(20),remark char(20)); //创建数据表
打开终端输入：http://localhost:3000/
