function checkPhone() {
    var loginPhone = document.getElementById('phoneNumber').value;
    var reg = /^1[3|4|5|7|8][0-9]\d{4,8}$/;

    if (!reg.test(loginPhone)) {
        document.getElementById('loginNamewarn').innerHTML = '请先输入您的正确手机号！';
        document.getElementById('phoneNumber').focus();

    } else {
        document.getElementById('loginNamewarn').innerHTML = '';
    }
}

function checkPassword() {
    var loginPassword = document.getElementById("loginPassword").value;
    if (loginPassword === '') {
        document.getElementById('loginPasswarn').innerHTML = '请先输入您的正确密码！';
        document.getElementById('loginPassword').focus();
    } else {
        document.getElementById('loginPasswarn').innerHTML = '';
    }
}

function check() {
    if(document.getElementById("phoneNumber").value===""||document.getElementById("loginPassword").value===""){
        document.getElementById("indexHint").innerHTML="请填写完整信息";
        return false;
    }else {
        document.getElementById("indexHint").innerHTML="";
        return true;
    }

}