$.ajax({
    type: 'post',
    url: '/checkPhone',
    contentType: 'application/json;charset=utf-8',
    success: function (result) {
        document.getElementById('peopleNum').innerHTML = result.length;
    }
});
$.ajax({
    type: 'post',
    url: '/allPost',
    contentType: 'application/json;charset=utf-8',
    success: function (result) {
        document.getElementById('postNum').innerHTML = result.length;
        // for (var i = 0; i < result.length; i++) {
        //     let title = result[i].title;
        //     let body = result[i].body;
        //     let id = result[i].id;
        //     let readed = result[i].readed;
        //     let author = result[i].author;
        //     let time = result[i].time;
        //     let school = result[i].school;
        //     let company = result[i].company;
        //     var addTr = document.createElement('tr');
        //     addTr.title = result[i].title;
        //     addTr.body = result[i].body;
        //     addTr.id = result[i].id;
        //     addTr.author = result[i].author;
        //     addTr.time = result[i].time;
        //     addTr.innerHTML = "<td class='thStylr' id='num'>" + id + "</td>" +
        //         "<td class='thStylr'>" + author + "</td>" +
        //         "<td class='thStylr'>" + title + "</td>" +
        //         "<td class='thStylr'>" + body + "</td>" +
        //         "<td class='thStylr'>" + readed + "</td>" +
        //         "<td class='thStylr'>" + time + "</td>" +
        //         "<td class='thStylr'>" + school + "</td>" +
        //         "<td class='thStylr'>" + company + "</td>" +
        //         "<td class='thStylr'><span  onclick='deleMyPost(this)'><img src='../images/del.png'></span></td>";
        //     document.getElementById('myPost').appendChild(addTr);
        // }
    }
});

// function deleMyPost(obj) {
//     var trId = obj.parentNode.parentNode.id;
//     var trObj = document.getElementById(trId);
//     document.getElementById("mangerPost").removeChild(trObj);
//     $.ajax({
//         type: "post",
//         url: "/delPost",
//         data: JSON.stringify({id: trId}),
//         contentType: "application/json;charset=utf-8",
//         success: function (result) {
//             // showAll();
//             console.log(result);
//         }
//     })
// }

function addCompany() {
    var coName = document.getElementById("coName").value;
    var coBody = document.getElementById("coBody").value;
    var exHiring = document.getElementById("exHiring").value;
    var hasHiring = document.getElementById("hasHiring").value;
    $.ajax({
        type: 'post',
        url: '/insertCompany',
        data: JSON.stringify({
            name: coName,
            body: coBody,
            exHiring: exHiring,
            hasHiring: hasHiring,
        }),
        contentType: "application/json; charset=utf-8",
        success: function (result) {
            location.replace(location);
        },
    });
}

$.ajax({
    type: 'post',
    url: '/allRecruitment',
    contentType: 'application/json;charset=utf-8',
    success: function (result) {
        document.getElementById('recruimentNum').innerHTML = result.length;
        for (var i = 0; i < result.length; i++) {
            let title = result[i].title;
            let body = result[i].body;
            let id = result[i].id;
            let author = result[i].author;
            let time = result[i].time;
            var addTr = document.createElement('tr');
            addTr.title = result[i].title;
            addTr.body = result[i].body;
            addTr.id = result[i].id;
            addTr.author = result[i].author;
            addTr.time = result[i].time;
            addTr.innerHTML = "<td class='thStylr' id='num'>" + id + "</td>" +
                "<td class='thStylr'>" + author + "</td>" +
                "<td class='thStylr'>" + title + "</td>" +
                "<td class='thStylr'>" + body + "</td>" +
                "<td class='thStylr'>" + time + "</td>" +
                "<td class='thStylr'><span  onclick='deletRe(this)'><img src='../images/del.png'></span></td>";
            document.getElementById('mangerRecruitment').appendChild(addTr);
        }
    }
});

function checkMangerRe() {
    var retitle = document.getElementById("retitle").value;
    var rebody = document.getElementById("rebody").value;
    var reauthor = document.getElementById("reauthor").value;
    if (retitle && rebody && reauthor) {
        document.getElementById("reSubmit").disabled = false;
    }
}

function addRecruitment() {
    var retitle = document.getElementById('retitle').value;
    var rebody = document.getElementById('rebody').value;
    var reauthor = document.getElementById('reauthor').value;
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
        url: '/insertRecruitment',
        data: JSON.stringify({
            title: retitle,
            body: rebody,
            author: reauthor,
            time: time,
        }),
        contentType: "application/json; charset=utf-8",
        success: function (result) {
            location.replace(location);
        },
    });
}

function checkMangerCo() {
    var coName = document.getElementById("coName").value;
    var coBody = document.getElementById("coBody").value;
    var exHiring = document.getElementById("exHiring").value;
    var hasHiring = document.getElementById("hasHiring").value;
    if (coName && coBody && exHiring && hasHiring) {
        document.getElementById("coSubmit").disabled = false;
    }
}

function deletRe(obj) {
    var trId = obj.parentNode.parentNode.id;
    console.log(trId)
    var trObj = document.getElementById(trId);
    document.getElementById("mangerRecruitment").removeChild(trObj);
    $.ajax({
        type: "post",
        url: "/delRecruitment",
        data: JSON.stringify({id: trId}),
        contentType: "application/json;charset=utf-8",
        success: function (result) {
        }
    })
}

$.ajax({
    type: 'post',
    url: '/allCompany',
    contentType: 'application/json;charset=utf-8',
    success: function (result) {
        document.getElementById('companyNum').innerHTML = result.length;
        for (var i = 0; i < result.length; i++) {
            let name = result[i].name;
            let body = result[i].body;
            let id = result[i].id;
            let exHiring = result[i].exHiring;
            let hasHiring = result[i].hasHiring;
            var addTr = document.createElement('tr');
            addTr.title = result[i].title;
            addTr.body = result[i].body;
            addTr.id = result[i].id;
            addTr.author = result[i].author;
            addTr.time = result[i].time;
            addTr.innerHTML = "<td class='thStylr' id='num'>" + id + "</td>" +
                "<td class='thStylr'>" + name + "</td>" +
                "<td class='thStylr'>" + body + "</td>" +
                "<td class='thStylr'>" + exHiring + "</td>" +
                "<td class='thStylr'>" + hasHiring + "</td>" +
                "<td class='thStylr'><span  onclick='deletCo(this)'><img src='../images/del.png'></span></td>";
            document.getElementById('mangerCompany').appendChild(addTr);
        }

    }
});

function deletCo(obj) {
    var trId = obj.parentNode.parentNode.id;
    var trObj = document.getElementById(trId);
    document.getElementById("mangerCompany").removeChild(trObj);
    $.ajax({
        type: "post",
        url: "/delCompany",
        data: JSON.stringify({id: trId}),
        contentType: "application/json;charset=utf-8",
        success: function (result) {
        }
    })
}