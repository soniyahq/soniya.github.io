(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();


    });

    $(document).ready(function () {
	    $(".btn-select").each(function (e) {
	        var value = $(this).find("ul li.selected").html();
	        if (value != undefined) {
	            $(this).find(".btn-select-input").val(value);
	            $(this).find(".btn-select-value").html(value);
	        }
	    });
	});

	$(document).on('click', '.btn-select', function (e) {
	    e.preventDefault();
	    var ul = $(this).find("ul");
	    if ($(this).hasClass("active")) {
	        if (ul.find("li").is(e.target)) {
	            var target = $(e.target);
	            target.addClass("selected").siblings().removeClass("selected");
	            var value = target.html();
	            $(this).find(".btn-select-input").val(value);
	            $(this).find(".btn-select-value").html(value);
	        }
	        ul.hide();
	        $(this).removeClass("active");
	    }
	    else {
	        $('.btn-select').not(this).each(function () {
	            $(this).removeClass("active").find("ul").hide();
	        });
	        ul.slideDown(300);
	        $(this).addClass("active");
	    }
	});

	$(document).on('click', function (e) {
	    var target = $(e.target).closest(".btn-select");
	    if (!target.length) {
	        $(".btn-select").removeClass("active").find("ul").hide();
	    }
	});


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

    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('.filter-sticky').addClass("sticky");
        } else {
            $('.filter-sticky').removeClass("sticky");
        }
    });
    
 
    // js for filter menu
     $('.dropable').on('click', function () {
        $('.ht-dropdown').toggle();
    });
     $('.more-filter').on('click', function () {
        $('.morre-filter-list').toggle();
    });


    // js for property share button
	$(document).ready(
	    function() {
	    	$("#emailinfo").hide();
	    	$("#email").click(function(){
	        $("#emailinfo").toggle();
	    });
        

    });




}(jQuery));	
