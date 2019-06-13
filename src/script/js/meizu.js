! function () {
    class meizu {
        constructor() {
            this.baidu = $('#mz-index-banner');
            this.pic_ul = $('.swiper-wrapper');
            this.pic_li = $('.swiper-wrapper .slider-1');
            this.btns = $('.swiper-container-banner .pagination span');
            this.num = 0; //当前点击的按钮的索引。
            this.tiem = null;
    }
            
        init() {
            var _this = this;
            //1.改变布局
            var $first = this.pic_li.first().clone(true, true);
            var $last = this.pic_li.last().clone(true, true);
            this.pic_ul.append($first);
            this.pic_ul.prepend($last);

            //2.ul赋值宽度
            this.liwidth = $('.swiper-wrapper .slider-1').eq(0).width();
            this.pic_ul.width($('.swiper-wrapper .slider-1').length * this.liwidth).css('left', -this.liwidth + 'px');
            //3.给所有的btns添加点击事件。
            this.baidu.hover(function(){
                clearInterval(_this.tiem)
            },function(){
                _this.tiem=setInterval(function(){
                    _this.num++
                    _this.btns.eq(_this.num).addClass('swiper-active-switch').siblings().removeClass('swiper-active-switch')
                    _this.tabswitch();
                },4000)
            });
            this.btns.on('click', function () {
                _this.num = $(this).index(); //当前的索引
                _this.tabswitch();
                _this.btns.eq(_this.num).addClass('swiper-active-switch').siblings().removeClass('swiper-active-switch');
            });

            this.tiem=setInterval(function(){
                _this.num++
                _this.btns.eq(_this.num).addClass('swiper-active-switch').siblings().removeClass('swiper-active-switch')
                _this.tabswitch();
            },4000)
        }
        tabswitch() {
            var _this = this;
            this.pic_ul.stop(true, true).animate({
                left: -(this.num + 1) * this.liwidth
            }, function () { //通过条件判断是否需要切换css位置。
                if (_this.num == _this.btns.length) {
                    _this.pic_ul.css('left', -(_this.liwidth) + 'px');
                    _this.num = 0;
                }

                if (_this.num == -1) {
                    _this.pic_ul.css('left', -(_this.liwidth) * _this.btns.length + 'px');
                    _this.num = _this.btns.length - 1;
                }
            });
        }

    }
    new meizu().init();
}();
