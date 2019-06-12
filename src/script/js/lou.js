! function($) {
	class lou {
		constructor() {
			this.louti = $("#loutinav");
			this.loutinav = $("#loutinav li");
			this.louceng = $("#louceng.section-box-row");
			this.last = $(".last");
		}
		init() {
			var _this = this;
			$(window).on('scroll', function() {
				_this.se();
			})
			this.loutinav.not(".last").on("click", function() {
				_this.sc(this);
			})
			this.last.on("click", function() {
				_this.sb();
			})
		}
		se() {
			var _this = this;
			var $top = $(window).scrollTop();
			if($top >=700) {
				this.louti.show();
			} else {
				this.louti.hide();
			}
			this.louceng.each(function(index, element) {
				let loucengtop = $(element).offset().top + $(element).outerHeight()/2;
				if(loucengtop > $top) {
					_this.loutinav.not(".last").removeClass("active");
					_this.loutinav.not(".last").eq(index).addClass("active");
					return false;
				}
			})
		}
					sc(obj) {
						$(obj).addClass("active").siblings("li").removeClass("active");
						var $top= this.louceng.eq($(obj).index()).offset().top;
						$("html,body").animate({
							scrollTop: $top
						})
					}
		sb() {
			$("html,body").animate({
				scrollTop:0
			})
		}
	}
	new lou().init();
}(jQuery)