!function ($) {
    var $desid = window.location.search.substring(1);
    $.ajax({
        url: 'http://localhost/projectname/php/updath.php',
        data: { sid: $desid },
        dataType: "json",
        success: function (response) {
            var box = $("#preview")
            var box1 = $(".property-sell")
            var box2 = $("#bf")
            var temp = `
                <div class="fast-nav anim" id="J_fastNav">
            <div class="-container">
                <ul class="-ulist">
                            <li class="-item">
                        <a class="-link"  href="https://www.meizu.com/16xs/summary/">概述</a>
                    </li>
                    <li class="-item">
                        <a class="-link"  href="https://www.meizu.com/16xs/spec/">参数</a>
                    </li>
                </ul>
                <span class="-name">
                    ${response.title}
                </span>
            </div>
        </div>
        <div class="preview" id="preview">
                <div class="preview-booth">
                        <img src="${response.url}" height="400" width="400" alt="">
                    
                    <div id="sf"></div>
                </div>
                <ul class="preview-thumb clearfix" id="J_previewThumb">
                    <li class="current"><a  href="#">
                    <img src="${response.url}" width="80" height="80"></a></li>
                    <li><a  href="#">
                    <img src="${response.urls}" width="80" height="80"></a></li>
                    <li><a   href="#">
                    <img src="${response.jian}" width="80" height="80"></a></li>
                </ul>
                <div class="preview-action">
                    <a class="vm-favorite"  id="J_favorite" href="javascript:;"><i class="iconfont icon-favorite"></i>收藏 </a>
                    <a class="compare-btn-list" id="J_compare" ><i class="iconfont icon-duibi compare-duibi"></i><span>对比</span></a>
                </div>
        `
            var tenp = `
                    <div class="property-hd">
                     <h1>${response.title}</h1>

                    <p class="mod-info ">${response.titl}</p>
                    </div>



                <div class="property-sell">
                    <div class="property-sell-price clearfix">
                        <div class="mod-price">
                            <small>¥</small>
                            <span id="J_price" class="vm-money">${response.pice}</span>
                        </div>
                        <div class="mod-original" id="J_originalPrice" style="display:none;"></div>
                    </div>
                    <dl class="property-sell-app clearfix" id="J_propertySellAppPrice" style="display: none">
                        <dt class="vm-entry" id="J_appTag">
                            <span>APP专享</span>
                        </dt>
                        <dd class="mod-app-tip" id="J_appTip">
                            APP下单省<span id="J_appPrice" class="vm-money">0</span>元
                        </dd>
                    </dl>
                    <dl class="property-sell-coupon clearfix" id="J_prodPromo" style="">
                        <dt class="vm-entry">
                            <span>优惠券</span>
                        </dt>
                        <dd>
                            <p id="J_promoInner">
                                <span class="vm-tag">${response.app}</span>
                            </p>
                            <a class="vm-more" data-mtype="store_de_coupon_more" data-bh="click_store_de_coupon_more"
                                id="J_promoMore"
                                href="#">更多
                                &gt;</a>
                        </dd>
                    </dl>
                    <dl class="property-sell-morebuy clearfix" id="J_prodMorebuy" style="display:none;">
                        <dt class="vm-entry">
                            <span>加价购</span>
                        </dt>
                        <dd>
                            <span>
                                另加<em id="J_moreBuyStart">0</em>元起，即可换购超值商品
                            </span>
                            <a class="vm-more" data-mtype="store_de_coupon_more" data-bh="click_store_de_coupon_more" id="J_moreBuyEnter" href="#">立即加购 &gt;</a>
                        </dd>
                    </dl>
                    <dl class="property-sell-gift clearfix" id="J_prodGift" style="display:none;">
                        <dt class="vm-entry">
                            <span>赠品</span>
                        </dt>
                        <dd>
                        </dd>
                    </dl>
        `
            tep = `<img src="${response.url}" alt="" id="bpic">`
            box2.append(tep)
            box.append(temp);
            box1.append(tenp);
            var $J_fastNav = $("#J_fastNav");
            $(window).on('scroll', function () {
                var $top = $(window).scrollTop();
                if ($top > 150) {
                    $J_fastNav.removeClass("maim").addClass("fixed")
                } else {
                    $J_fastNav.removeClass("fixed").addClass("main")
                }
            });

            new lubo().init()


        }
    })

}(jQuery);