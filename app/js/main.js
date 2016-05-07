(function($){
	$('.navbar-toggler').on('click', function(e){
		e.preventDefault();
		$('.sidebar').toggleClass('toggled');
	});

	$('.sub-menu > a').on('click', function(e){
		e.preventDefault();
		$(this).find('i').toggleClass('ti-angle-right ti-angle-down');
		$(this).next('ul').toggleClass('toggled');
	});

})(jQuery);