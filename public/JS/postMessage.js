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
    $.ajax({
        type: 'post',
        url: '/checkPhone',
        contentType: 'application/json;charset=utf-8',
        success: function (result) {
            for (var i = 0; i < result.length; i++) {
                if (result[i].userphone === inputNumber) {
                    console.log(result[i])
                    document.getElementById("indexHint").innerHTML = "手机号已注册";
                }
            }

        }
    });
}