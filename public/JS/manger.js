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

    }
});
$.ajax({
    type: 'post',
    url: '/allRecruitment',
    contentType: 'application/json;charset=utf-8',
    success: function (result) {
        document.getElementById('recruimentNum').innerHTML = result.length;

    }
});
$.ajax({
    type: 'post',
    url: '/allCompany',
    contentType: 'application/json;charset=utf-8',
    success: function (result) {
        document.getElementById('companyNum').innerHTML = result.length;

    }
});

