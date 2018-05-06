function postEmpty() {
    document.getElementById('postTitle').value = '';
    document.getElementById('postBody').value = '';
}

function checkPost() {
    var postTitle = document.getElementById("postTitle").value;
    var postBody = document.getElementById("postBody").value;
    if (postBody && postTitle) {
        document.getElementById("postButton").disabled = false;
    }
}

function postSubmit(data) {
    var inputNumber = data.split("=")[1];
    var author, school, company;
    var title = document.getElementById("postTitle").value;
    var body = document.getElementById("postBody").value;
    var radios = document.getElementsByName("optionsRadiosinline");
    for (var j = 0; j < radios.length; j++) {
        if (radios[j].checked == true) {
            var label = radios[j].value;
        }
    }
    var readed = 1;
    var comments = '';
    var date = new Date();
    var seperator1 = "-";
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var time = year + seperator1 + month + seperator1 + strDate;
    $.ajax({
        type: 'post',
        url: '/checkPhone',
        contentType: 'application/json;charset=utf-8',
        success: function (result) {
            for (var i = 0; i < result.length; i++) {
                if (result[i].userphone === inputNumber) {
                    var userphone=result[i].userphone;
                    author = result[i].username;
                    school = result[i].userschool;
                    company = result[i].usercompany;
                    $.ajax({
                        type: 'post',
                        url: '/insertPost',
                        data: JSON.stringify({
                            title: title,
                            body: body,
                            label: label,
                            readed: readed,
                            comments: comments,
                            author: author,
                            time: time,
                            school: school,
                            company: company,
                        }),

                        contentType: "application/json; charset=utf-8",
                        success: function (result) {
                            console.log("post 70");
                            window.location.href = "http://localhost:3000/main.html?userPhone=" + userphone;
                        },
                    });
                }
            }
        }
    });


}