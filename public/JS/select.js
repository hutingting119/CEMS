function selectCompany() {
    var company = document.getElementById('selectInput').value;
    $.ajax({
        type: 'post',
        url: '/selectCompany',
        data: JSON.stringify({
            company: company,
        }),

        contentType: "application/json; charset=utf-8",
        success: function (result) {
            if(result.length!=0){
                document.getElementById('companyName').innerHTML=result[0].name;
                document.getElementById('companyBody').innerHTML=result[0].body;
                document.getElementById('exHiring').innerHTML=result[0].exHiring;
                document.getElementById('hasHiring').innerHTML=result[0].hasHiring;
                // console.log("select12:"+result[0].name);
            }else {
                console.log("meiyou")
            }

        },
    });
    return false;
}
//
// <div class="modal-header">
//     <h4 class="modal-title" id="myModalLabel">
//         公司名称：
//     </h4>
// </div>
// <div class="modal-body">
//     <div class="selectCompanyBoyd">公司简介：<span id="companyTitle">xxx</span></div>
// <div>预计招聘毕业生人数：<span>222</span></div>
// <div>实际已招聘毕业生人数：<span>3333</span></div>
// </div>