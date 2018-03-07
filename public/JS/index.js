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
        document.getElementById("indexHint").innerHTML = "";
        return true;
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