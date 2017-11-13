(function ($) {
    "use Strict";
     /*----------------------------
     Mobile Menu Activation
    -----------------------------*/
    jQuery('.mobile-menu nav').meanmenu({
        meanScreenWidth: "767",
    });
    
     $(".chosen-select").chosen({disable_search_threshold: 10});
    /*----------------------------
    1.sticky-menu
    ------------------------------ */
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('.header-sticky').addClass("sticky");
        } else {
            $('.header-sticky').removeClass("sticky");
        }
    });

     $('.slider').owlCarousel({
        loop: false,
        nav: true,
        dots: false,
        smartSpeed: 1000,
         navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        margin:0,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
     
     $('.dropable').on('click', function () {
        $('.ht-dropdown').toggle();
    });
     $('.more-filter').on('click', function () {
        $('.morre-filter-list').toggle();
    });
    
     /*----- cart-plus-minus-button -----*/
	 $(".cart-plus-minus").append('<div class="dec qtybutton">-</div><div class="inc qtybutton">+</div>');
	  $(".qtybutton").on("click", function() {
		var $button = $(this);
		var oldValue = $button.parent().find("input").val();
		if ($button.text() == "+") {
		  var newVal = parseFloat(oldValue) + 1;
		} else {
		   // Don't allow decrementing below zero
		  if (oldValue > 0) {
			var newVal = parseFloat(oldValue) - 1;
			} else {
			newVal = 0;
		  }
		  }
		$button.parent().find("input").val(newVal);
	  });
})(jQuery);