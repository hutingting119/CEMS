function checkMessage() {
    var messageName = document.getElementById("messageName").value;
    var messageCompany = document.getElementById("messageCompany").value;
    var messageSchool = document.getElementById("messageSchool").value;
    if (messageName && messageCompany && messageSchool) {
        document.getElementById("changeMessage").disabled = false;
    }
}

function submitMessage() {
    var phone = window.location.search.slice(window.location.search.lastIndexOf("?") + 1).split('=')[1];
    var messageName = document.getElementById('messageName').value;
    var messageCompany = document.getElementById('messageCompany').value;
    var messageSchool = document.getElementById('messageSchool').value;
    $.ajax({
        type: 'post',
        url: '/settingUpdate',
        data: JSON.stringify({
            messageName: messageName,
            messageCompany: messageCompany,
            messageSchool: messageSchool,
            phone: phone,
        }),

        contentType: "application/json; charset=utf-8",
        success: function () {
            alert("个人信息修改成功");
        },
    });
    return false;
}