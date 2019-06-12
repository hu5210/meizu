!function ($) {
    $.ajax({
        type: 'post',
        url: 'http://localhost/projectname/php/postdata.php',
        dataType: "json",
        success: function (data) {
            var list = $("#tow");
            var last=$("#clearfix")
            var three=$("#three")
            var four=$("#four")
            var temp = ""
            var str = "";
            str += "<ul class='clearfix index-center-wrapper'>";
            $.each(data, function (i, val) {
                if(i<4){
                    str += "<li class='adv-box-1'><a href='http://localhost/projectname/src/cart.html'><img src='" + val.url + "'><em>" + val.title + "</em><p style='color:red;font-size:20px'>" + val.pice + "</p></a></li>";
                }
            })
            str += "</ul>";
            $('#adv').html(str);
            data.forEach(function (eml, i) {
                temp += `
            <li>
            <div class="section-item-box goods-box">
                <a class="box-img box-img-retina"
                    href="http://localhost/projectname/src/cart.html"
                    target="_blank">

                    <img class="goods-img lazy-img"
                        src="${eml.url}">
                    <span class="box-info">

                        <span class="goods-name">${eml.title}</span>
                        <span class="goods-desc">${eml.titl}</span>
            <span style="color:red;" class="goods-price"> <i>￥</i>${eml.pice}<em></em> </span>
                    </span>

                </a>
            </div>
        </li>
                    `

            }); 
            list.append(temp);
            last.append(temp);
            three.append(temp);
            four.append(temp);
        }
    })
}(jQuery);