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
     $(document).ready(function() {
 
  $("#owl-example").owlCarousel({
        navigation : true, 
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem: true,
            pagination: false,
        rewindSpeed: 500
    });
 
});
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

  function sticky_relocate() {
      var window_top = $(window).scrollTop();
      var div_top = $('#sticky-anchor').offset().top;
      if (window_top > div_top) {
          $('#sticky').addClass('stick');
      } else {
          $('#sticky').removeClass('stick');
      }
  }

  $(function() {
      $(window).scroll(sticky_relocate);
      sticky_relocate();
  });

  var dir = 1;
  var MIN_TOP = 200;
  var MAX_TOP = 350;

  function autoscroll() {
      var window_top = $(window).scrollTop() + dir;
      if (window_top >= MAX_TOP) {
          window_top = MAX_TOP;
          dir = -1;
      } else if (window_top <= MIN_TOP) {
          window_top = MIN_TOP;
          dir = 1;
      }
      $(window).scrollTop(window_top);
      window.setTimeout(autoscroll, 100);
  }


  //plugin bootstrap minus and plus
//http://jsfiddle.net/laelitenetwork/puJ6G/
$('.btn-number').click(function(e){
    e.preventDefault();
    
    fieldName = $(this).attr('data-field');
    type      = $(this).attr('data-type');
    var input = $("input[name='"+fieldName+"']");
    var currentVal = parseInt(input.val());
    if (!isNaN(currentVal)) {
        if(type == 'minus') {
            
            if(currentVal > input.attr('min')) {
                input.val(currentVal - 1).change();
            } 
            if(parseInt(input.val()) == input.attr('min')) {
                $(this).attr('disabled', true);
            }

        } else if(type == 'plus') {

            if(currentVal < input.attr('max')) {
                input.val(currentVal + 1).change();
            }
            if(parseInt(input.val()) == input.attr('max')) {
                $(this).attr('disabled', true);
            }

        }
    } else {
        input.val(0);
    }
});
$('.input-number').focusin(function(){
   $(this).data('oldValue', $(this).val());
});
$('.input-number').change(function() {
    
    minValue =  parseInt($(this).attr('min'));
    maxValue =  parseInt($(this).attr('max'));
    valueCurrent = parseInt($(this).val());
    
    name = $(this).attr('name');
    if(valueCurrent >= minValue) {
        $(".btn-number[data-type='minus'][data-field='"+name+"']").removeAttr('disabled')
    } else {
        alert('Sorry, the minimum value was reached');
        $(this).val($(this).data('oldValue'));
    }
    if(valueCurrent <= maxValue) {
        $(".btn-number[data-type='plus'][data-field='"+name+"']").removeAttr('disabled')
    } else {
        alert('Sorry, the maximum value was reached');
        $(this).val($(this).data('oldValue'));
    }
    
    
});
$(".input-number").keydown(function (e) {
        // Allow: backspace, delete, tab, escape, enter and .
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 190]) !== -1 ||
             // Allow: Ctrl+A
            (e.keyCode == 65 && e.ctrlKey === true) || 
             // Allow: home, end, left, right
            (e.keyCode >= 35 && e.keyCode <= 39)) {
                 // let it happen, don't do anything
                 return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    });


// show more btn 

$('#toggle_event_editing button').click(function(){
  if($(this).hasClass('locked_active') || $(this).hasClass('unlocked_inactive')){
    /* code to do when unlocking */
        $('#switch_status').html('Switched on.');
  }else{
    /* code to do when locking */
        $('#switch_status').html('Switched off.');
  }
  
  /* reverse locking status */
  $('#toggle_event_editing button').eq(0).toggleClass('locked_inactive locked_active btn-default btn-info');
  $('#toggle_event_editing button').eq(1).toggleClass('unlocked_inactive unlocked_active btn-info btn-default');
});

$('#toggle_event_editing2 button').click(function(){
  if($(this).hasClass('locked_active') || $(this).hasClass('unlocked_inactive')){
    /* code to do when unlocking */
        $('#switch_status').html('Switched on.');
  }else{
    /* code to do when locking */
        $('#switch_status').html('Switched off.');
  }
  
  /* reverse locking status */
  $('#toggle_event_editing2 button').eq(0).toggleClass('locked_inactive locked_active btn-default btn-info');
  $('#toggle_event_editing2 button').eq(1).toggleClass('unlocked_inactive unlocked_active btn-info btn-default');
});



})(jQuery);