! function ($) {
    class lubo {
        constructor() {
            this.sp = $(".preview-booth");
            this.sf = $("#sf");
            this.bf = $("#bf");
            this.bp = $("#bpic");
            this.wt = $(".container");
            this.listli = $("#J_previewThumb li");
            this.listul = $("#J_previewThumb")
        }
        init() {
            var _this = this;
            this.sp.hover(function () {
                _this.bf_arise();
                $(this).on("mousemove", function (ev) { //拖动小图
                    _this.move(ev)
                })
            }, function () {
                _this.bf_hide()
            })
            this.sf.css({
                width: this.sp.width() * this.bf.width() / this.bp.width(),
                height: this.sp.height() * this.bf.height() / this.bp.height()

            })
            this.bili = this.bp.outerWidth() / this.sp.outerWidth()
            this.listli.on("click", function () {
                
                var $imgurl = $(this).find("img").attr("src")
                _this.sp.find("img").attr("src", $imgurl)
                _this.bp.attr("src",$imgurl)
            })
            this.oneul = this.listli.eq(0).outerWidth(true)
        }
        bf_arise() {
            this.bf.css("visibility", "visible");
            this.sf.css("visibility", "visible");
        }
        bf_hide() {
            this.bf.css("visibility", "hidden");
            this.sf.css("visibility", "hidden");
        }
        move(ev) { //移动的位置
            var l = ev.pageX - this.wt.offset().left - this.sf.width() / 2;
            var t = ev.pageY - this.wt.offset().top - this.sf.height() / 2;
            if (l <= 0) {
                l = 0;
            } else if (l >= this.sp.outerWidth() - this.sf.outerWidth() - 2) {
                l = this.sp.outerWidth() - this.sf.outerWidth() - 2
            }
            if (t <= 0) {
                t = 0;
            } else if (t >= this.sp.outerHeight() - this.sf.outerHeight() - 2) {
                t = this.sp.outerHeight() - this.sf.outerHeight() - 2
            }
            this.sf.css({
                left: l,
                top: t
            });
            this.bp.css({
                left: -l * this.bili,
                top: -t * this.bili
            })
         }
    }

    window.lubo = lubo;
}(jQuery);