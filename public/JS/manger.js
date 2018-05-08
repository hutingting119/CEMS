//显示所有招聘信息
function allRecruitment() {
    $.ajax({
        type: 'post',
        url: '/allRecruitment',
        contentType: 'application/json;charset=utf-8',
        success: function (result) {
            for (var i = 0; i < result.length; i++) {
                console.log(result[i])
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