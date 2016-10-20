var clock, daily;

(function($) {
	
	$(function() {
		var date = new Date('December 8, 2016 04:00:00');
		var now = new Date();
		var diff = (date.getTime()/1000) - (now.getTime()/1000);

		// var today = new Date();
		// today = today.getTime()/1000;

		// var finalDate = new Date();
		// finalDate.setFullYear(2016);
		// finalDate.setMonth(12);
		// finalDate.setDate(8);
		// finalDate.setHours(2);
		// finalDate.setMinutes(00);
		// finalDate.setSeconds(00);

		// var finalDate = finalDate.getTime()/1000;
		// var diff = finalDate - today;

		var clock = $('.flip-counter').FlipClock(diff, {
			clockFace: 'DailyCounter',
			countdown: true
		});				 
				
		$('.waypoint').waypoint(function() {
			var id = $(this).attr('id');
			
			$('.sidebar li').removeClass('active');
			$('.sidebar a[href="#'+id+'"]').parent().addClass('active');
		});
		
		var $sidebar = $('.sidebar');
			
		$('.hinge-nav').waypoint(function() {
			$sidebar.removeClass('fixed');
		});
		
		$('.unhinge-nav').waypoint(function() {
			$sidebar.addClass('fixed');
			_resizeSidebar();
		});
		
		$('.sidebar li a').click(function(e) {
			var $t = $(this);
			$('.sidebar .active').removeClass('active');
			$t.addClass('active');
		});

		$('a[href^=#]').click(function(){
			var $t = $(this);
		    $('html, body').animate({
		        scrollTop: $( $.attr(this, 'href') ).offset().top
		    }, 500, function() { 
		    	$('.sidebar .active').removeClass('active'); 
		    	$t.parent().addClass('active'); 
		    });
		    return false;
		});

		$(window).resize(function() {
			_resizeSidebar();
		});
		
		function _resizeSidebar() {
			$sidebar.parent().attr('style', false);
				
			if($sidebar.hasClass('fixed')) {
				$sidebar.width($sidebar.parent().width());
			}
		}
	});
	
}(jQuery));