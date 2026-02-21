(function($){
	$(document).ready(function() {	

		// Scroll to Top
		jQuery('.scrolltotop').click(function(){
			jQuery('html').animate({'scrollTop' : '0px'}, 400);
			return false;
		});

		$('.dropdown-wp > a').on('click', function(e) {
			e.preventDefault(); // This stops the link from navigating
		  });
		  
		
		jQuery(window).scroll(function(){
			var upto = jQuery(window).scrollTop();
			if(upto > 500) {
				jQuery('.scrolltotop').fadeIn();
			} else {
				jQuery('.scrolltotop').fadeOut();
			}
			if (upto > 152) {
				jQuery(".site-navbar").addClass("menu-sticky");
	
			} else {
				jQuery(".site-navbar").removeClass("menu-sticky");
			}
		});
		// toogle button js 

		$(".toggle").click(function() {
			$(this).toggleClass("activate");
		});		
		$('#offcanvasMenu').on('hidden.bs.offcanvas', function () {
			$(".toggle").removeClass("activate");
		});

		

				
		
		$(".site-footer").jParticle({
			background: "#0A082E",
			color: "#ddd",
			particle: {
				speed: 20,
				number: 1,
				size: 100,
			}
	
		});
		
		
		// video popup js 
		$(document).ready(function () {
			var videoID = "kPhO2qzQIW8";
			var youtubeLink = "https://www.youtube.com/embed/" + videoID + "?autoplay=1&mute=1";
	  
			$('#videoModal').on('shown.bs.modal', function () {
			  $('#youtubeIframe').attr('src', youtubeLink);
			});
	  
			$('#videoModal').on('hidden.bs.modal', function () {
			  $('#youtubeIframe').attr('src', '');
			});
		  });
		
		
		// contact form js 
		$('input[name="select-type"]').on('change', function () {
			if ($(this).is(':checked')) {
			  $('input[name="select-type"]').not(this).prop('checked', false);
			}
		  });
		
		
	});
})(jQuery);

// wow js install 

new WOW().init();