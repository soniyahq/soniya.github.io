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

	// slider js

	var carousel = document.querySelector('.carousel');
	var container = carousel.querySelector('.carousel-container');
	var pagination = carousel.querySelector('.carousel-pagination');
	var bullets = [].slice.call(carousel.querySelectorAll('.carousel-bullet'));
	var totalItems = container.querySelectorAll('.carousel-item').length;
	var percent = (100 / totalItems);
	var currentIndex = 0;

	function next(){
	    slideTo(currentIndex + 1);
	}

	function prev(){
	    slideTo(currentIndex - 1);
	}

	function slideTo(index){
	    index = index < 0 ? totalItems - 1 : index >= totalItems ? 0 : index;
	    container.style.WebkitTransform = container.style.transform = 'translate(-' + (index * percent) + '%, 0)';
	    bullets[currentIndex].classList.remove('active-bullet');
	    bullets[index].classList.add('active-bullet');
	    currentIndex = index;
	}

	bullets[currentIndex].classList.add('active-bullet');
	carousel.querySelector('.carousel-prev').addEventListener('click', prev, false);
	carousel.querySelector('.carousel-next').addEventListener('click', next, false);

	pagination.addEventListener('click', function(e){
	    var index = bullets.indexOf(e.target);
	    if(index !== -1){
	        slideTo(index);
	    }
	}, false);


	
}(jQuery));	