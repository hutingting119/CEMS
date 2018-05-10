$.ajax({
    type: 'post',
    url: '/allPost',
    contentType: 'application/json;charset=utf-8',
    success: function (result) {
        for (var i = 0; i < result.length; i++) {
            var userPhone = window.location.search.slice(window.location.search.lastIndexOf("?") + 1).split('=')[1];
            if (userPhone === result[i].userPhone) {
                let title = result[i].title;
                let body = result[i].body;
                let id = result[i].id;
                let readed = result[i].readed;
                let time = result[i].time;
                var addTr = document.createElement('tr');
                addTr.title = result[i].title;
                addTr.body = result[i].body;
                addTr.id = result[i].id;
                addTr.author = result[i].author;
                addTr.time = result[i].time;
                addTr.innerHTML = "<td class='thStylr' id='num'>" + id + "</td>" +
                    "<td class='thStylr'>" + title + "</td>" +
                    "<td class='thStylr'>" + body + "</td>" +
                    "<td class='thStylr'>" + readed + "</td>" +
                    "<td class='thStylr'>" + time + "</td>" +
                    "<td class='thStylr'><span  onclick='deleMyPost(this)'><img src='../images/del.png'></span></td>";
                document.getElementById('myPost').appendChild(addTr);
            }
        }
    }
});

function deleMyPost(obj) {
    var trId = obj.parentNode.parentNode.id;
    var trObj = document.getElementById(trId);
    document.getElementById("myPost").removeChild(trObj);
    $.ajax({
        type: "post",
        url: "/delPost",
        data: JSON.stringify({id: trId}),
        contentType: "application/json;charset=utf-8",
        success: function (result) {
            // showAll();
            console.log(result);
        }
    })
}