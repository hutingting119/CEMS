//index
function checkPhone() {
    var loginPhone = document.getElementById('phoneNumber').value;
    var reg = /^1[3|4|5|7|8][0-9]\d{4,8}$/;

    if (!reg.test(loginPhone)) {
        document.getElementById('loginNamewarn').innerHTML = '请先输入您的正确手机号！';
        document.getElementById('phoneNumber').focus();
    } else {
        document.getElementById('loginNamewarn').innerHTML = '';
        return 1;
    }
}

function checkPassword() {
    var loginPassword = document.getElementById("loginPassword").value;
    if (loginPassword === '') {
        document.getElementById('loginPasswarn').innerHTML = '请先输入您的正确密码！';
        document.getElementById('loginPassword').focus();
    } else {
        document.getElementById('loginPasswarn').innerHTML = '';
        return 1;
    }
}

function checkIndexAll() {
    var tag = checkPhone() + checkPassword();
    if (tag != 2) {
        document.getElementById("indexHint").innerHTML = "请填写完整信息";
        return false;
    } else {
        var loginPhone = document.getElementById('phoneNumber').value;
        var checkLoginPassword = document.getElementById("loginPassword").value;
        $.ajax({
            type: 'post',
            url: '/checkPassword',
            data: JSON.stringify({
                loginPhone: loginPhone,
            }),

            contentType: "application/json; charset=utf-8",
            success: function (result) {
                console.log("index.js" + result)
                if (checkLoginPassword === result) {
                    window.location.href = "http://localhost:3000/main.html?userPhone=" + loginPhone;
                    // location.replace("http://localhost:3000/main.html");
                } else {
                    document.getElementById("indexHint").innerHTML = "帐号或密码错误";
                }
            },
        });
        return false;
    }
}

//registered
function checkReName() {
    var reUserName = document.getElementById("reUserName").value;
    if (reUserName === '') {
        document.getElementById('reNameWarn').innerHTML = '请输入昵称！';
        document.getElementById('reUserName').focus();
    } else {
        document.getElementById('reNameWarn').innerHTML = '';
        return 1;
    }
}

function checkReNumebr() {
    var rephoneNumber = document.getElementById('rephoneNumber').value;
    var reg = /^1[3|4|5|7|8][0-9]\d{4,8}$/;
    if (!reg.test(rephoneNumber)) {
        document.getElementById('rePhoneNumberWarn').innerHTML = '请先输入您的正确手机号！';
        document.getElementById('rephoneNumber').focus();
    } else {
        document.getElementById('rePhoneNumberWarn').innerHTML = '';
        return 1;
    }
}

function checkReCompany() {
    var loginPassword = document.getElementById("reCompany").value;
    if (loginPassword === '') {
        document.getElementById('reCompanyWarn').innerHTML = '请输入正确的公司名称！';
        document.getElementById('reCompany').focus();
    } else {
        document.getElementById('reCompanyWarn').innerHTML = '';
        return true;
    }
}

function checkReSchool() {
    var reSchool = document.getElementById("reSchool").value;
    if (reSchool === '') {
        document.getElementById('reSchoolWarn').innerHTML = '请输入正确的毕业学校！';
        document.getElementById('reSchool').focus();
    } else {
        document.getElementById('reSchoolWarn').innerHTML = '';
        return 1;
    }
}

function checkRePassword() {
    var rePassword = document.getElementById('rePassword').value;
    if (rePassword.length < 6 || rePassword.length > 21) {
        document.getElementById('rePasswordWarn').innerHTML = '请输入6～20位的密码';
        document.getElementById('rePassword').focus();
    } else {
        document.getElementById('rePasswordWarn').innerHTML = '';
        return 1;
    }
}

function checkRePasswordAgain() {
    var password = document.getElementById('rePassword').value;
    var passwordAgain = document.getElementById('rePasswordAgain').value;
    if (passwordAgain.length < 6 || passwordAgain.length > 21) {
        document.getElementById('rePasswordAgainWarn').innerHTML = '请再次输入6～20位的密码';
        document.getElementById('rePasswordAgain').focus();
    } else if (passwordAgain != password) {
        document.getElementById('rePasswordAgainWarn').innerHTML = '两次密码不一致';
        document.getElementById('rePasswordAgain').focus();
    } else {
        document.getElementById('rePasswordAgainWarn').innerHTML = '';
        return 1;
    }
}

function checkRegisterAll() {

    var tag = checkReName() + checkReNumebr() + checkReCompany() + checkReSchool() + checkRePassword() + checkRePasswordAgain();
    if (tag != 6) {
        document.getElementById("indexHint").innerHTML = "请填写完整信息";
        return false;
    } else {
        var inputNumber = document.getElementById('rephoneNumber').value;
        $.ajax({
            type: 'post',
            url: '/checkPhone',
            contentType: 'application/json;charset=utf-8',
            success: function (result) {
                var flag = 0;
                for (var i = 0; i < result.length; i++) {
                    if (result[i].userphone === inputNumber) {
                        document.getElementById("indexHint").innerHTML = "手机号已注册";
                        flag = 1;
                    }
                }
                if (flag === 0) {
                    addUser();
                }
            }
        });
        return false;
    }
}

function addUser() {
    var username = document.getElementById("reUserName").value;
    var userphone = document.getElementById('rephoneNumber').value;
    var usercompany = document.getElementById("reCompany").value;
    var userschool = document.getElementById("reSchool").value;
    var userpassword = document.getElementById('rePassword').value;
    $.ajax({
        type: 'post',
        url: '/userinsert',
        data: JSON.stringify({
            userphone: userphone,
            username: username,
            usercompany: usercompany,
            userschool: userschool,
            userpassword: userpassword,
        }),

        contentType: "application/json; charset=utf-8",
        success: function (result) {
            location.replace("http://localhost:3000/");
        },
    });
}

//findPassword
function creatCode() {
    code = '';
    var codeLength = 6;
    var checkCode = document.getElementById("checkCode");
    var codeChars = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'); //所有候选组成验证码的字符，当然也可以用中文的
    for (var i = 0; i < codeLength; i++) {
        var charNum = Math.floor(Math.random() * 52);
        code += codeChars[charNum];
    }
    if (checkCode) {
        checkCode.className = "code";
        checkCode.innerHTML = code;
    }
}

function checkRegisterFont() {
    var Font = document.getElementById('findFont').value;
    if (Font.length <= 0) {
        document.getElementById('findwarn').innerHTML = '请输入验证码';
        document.getElementById('findFont').focus();
    }
    else if (Font.toUpperCase() != code.toUpperCase()) {
        document.getElementById('findwarn').innerHTML = '验证码错误';
        document.getElementById('findFont').focus();
        creatCode();
    }
    else {
        document.getElementById('findwarn').innerHTML = '';
        return 1;
    }
}

function findNumebr() {
    var findPhone = document.getElementById('findPhone').value;
    var reg = /^1[3|4|5|7|8][0-9]\d{4,8}$/;
    if (!reg.test(findPhone)) {
        document.getElementById('findPhonewarn').innerHTML = '请先输入您的正确手机号！';
        document.getElementById('findPhone').focus();
    } else {
        document.getElementById('findPhonewarn').innerHTML = '';
        return 1;
    }
}

function checkFindAll() {
    var tag = checkRegisterFont() + findNumebr();
    if (tag != 2) {
        document.getElementById("indexHint").innerHTML = "请填写完整正确信息";
        return false;
    } else {
        document.getElementById("indexHint").innerHTML = "";
        return true;
    }
}

//reserPassword
function checkresertPassword() {
    var rePassword = document.getElementById('resertPassword').value;
    if (rePassword.length < 6 || rePassword.length > 21) {
        document.getElementById('resertPasswordwarn').innerHTML = '请输入6～20位的密码';
        document.getElementById('resertPassword').focus();
    } else {
        document.getElementById('resertPasswordwarn').innerHTML = '';
        return 1;
    }
}

function checkresertPasswordAgain() {
    var password = document.getElementById('resertPassword').value;
    var passwordAgain = document.getElementById('resertPasswordAgain').value;
    if (passwordAgain.length < 6 || passwordAgain.length > 21) {
        document.getElementById('resertPasswordAgainwarn').innerHTML = '请再次输入6～20位的密码';
        document.getElementById('resertPasswordAgain').focus();
    } else if (passwordAgain != password) {
        document.getElementById('resertPasswordAgainwarn').innerHTML = '两次密码不一致';
        document.getElementById('resertPasswordAgain').focus();
    } else {
        document.getElementById('resertPasswordAgainwarn').innerHTML = '';
        return 1;
    }
}

function resertFindAll() {
    var tag = checkresertPassword() + checkresertPasswordAgain();
    if (tag != 2) {
        document.getElementById("indexHint").innerHTML = "请填写完整正确信息";
        return false;
    } else {
        document.getElementById("indexHint").innerHTML = "";
        return true;
    }
}

//显示所有帖子
function allPost() {
    $.ajax({
        type: 'post',
        url: '/allPost',
        contentType: 'application/json;charset=utf-8',
        success: function (result) {
            for (var i = 0; i < result.length; i++) {
                console.log(result[i])
                let title = result[i].title;
                let body = result[i].body;
                let label = result[i].label;
                let readed = result[i].readed;
                let comments = result[i].comments;
                let author = result[i].author;
                let time = result[i].time;
                let school = result[i].school;
                let company = result[i].company;
                var addTr = document.createElement('tr');
                addTr.title = result[i].title;
                addTr.body = result[i].body;
                addTr.label = result[i].label;
                addTr.readed = result[i].readed;
                addTr.comments = result[i].comments;
                addTr.author = result[i].author;
                addTr.time = result[i].time;
                addTr.school = result[i].school;
                addTr.company = result[i].company;
                var comm = '';
                if (comments === '') {
                    comm = 0;
                }
                var labels = "";
                switch (label) {
                    case "option1":
                        labels = "<span class='label-info'>[推荐]</span>";
                        break;
                    case "option2":
                        labels = "<span class='label-success'>[置顶]</span>";
                        break;
                    case "option3":
                        labels = "<span class='label-danger'>[爆]</span>";
                        break;
                    default:
                        labels = "";
                }
                addTr.innerHTML = "<div class='mainData'><a>" + title + "</a>" + labels + "<span class='mainDataImg'>" +
                    "发帖人：" + author + "&nbsp;&nbsp;&nbsp;就业公司：" + company + "&nbsp;&nbsp;&nbsp;&nbsp;毕业院校:" +
                    school + "</span><div class='mainDataBody'>" + body + "</div><div class='article_manage'>" +
                    "<span class='link_postdate'>" + time + "</span><span class='link_view'><a href=''>" +
                    "<img src='../images/read.png'>阅读</a>(" + readed + ")" + "</span><span class='link_comments'>" +
                    "<a href=''><img src='../images/comment.png' alt=''>评论</a>(" + comm + ")</span>" +
                    "<span class='link_edit'><a href=''><img src='../images/edit.png' alt=''>编辑</a></span>" +
                    "<span class='link_edit'><a href=''><img src='../images/stick.png' alt=''>置顶</a></span>" +
                    "<span class='link_delete' onclick='delet(this)'>" +
                    "<a href=''><img src='../images/dele.png' alt=''>删除</a></span></div></div>";
                document.getElementById('tables').appendChild(addTr);

            }
        }
    })
}

function delet(obj) {
    var trId = obj.parentNode.parentNode.id;
    var trObj = document.getElementById(trId);
    document.getElementById("tables").removeChild(trObj);
    $.ajax({
        type: "post",
        url: "/delPost",
        data: JSON.stringify({id: trId}),
        contentType: "application/json;charset=utf-8",
        success: function (result) {
            allPost();
            console.log(result);
        }
    })
}