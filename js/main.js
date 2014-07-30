function initialize() {
	var mapCanvas = document.getElementById('map_canvas');
	var mapOptions = {
	  center: new google.maps.LatLng(44.5403, -78.5463),
	  zoom: 8,
	  mapTypeId: google.maps.MapTypeId.ROADMAP
	}
	var map = new google.maps.Map(mapCanvas, mapOptions);
}

google.maps.event.addDomListener(window, 'load', initialize);



window.addEventListener("scroll", function(evt) {
	var sp = $(document).scrollTop()

	if(sp >= 549){
		$('.site-header').addClass('float-header')
		$('body').addClass('wfh')		
	}else if(sp >= 550 && sp <= 1020){
		console.log('condicion 1')
		$('.site-nav > .menu > LI:nth-child(1)').addClass('active')
	}else if(sp >= 1021 && sp <=1230){	
		console.log('condicion 2')		
		$('.site-nav > .menu > LI:nth-child(2)').addClass('active')
	}else if(sp >= 1231){
		console.log('condicion 3')
		$('.site-nav > .menu > LI:nth-child(3)').addClass('active')
	}else if(sp <= 548){
		$('.site-header').removeClass('float-header')
		$('body').removeClass('wfh')
		$('.site-nav > .menu > LI').removeClass('active')		
	}


});

$('.btn-login').on('click', function(e){
	e.preventDefault();
	$('body').addClass('no-scroll')
	$('#overlay').fadeIn('fast')
})

$('#overlay, .header-modal > .btn').on('click', function(e){
	setTimeout(function(){
		$('body').removeClass('no-scroll')
	}, 300)
	$('#overlay').fadeOut('fast')
})

$('#overlay > DIV').on('click', function(e){
	e.stopPropagation()
})

$('.trigger').on('click', function(e){
	e.preventDefault();
	var idf = $(this).data('form')
	$('#modal-forms > FORM').addClass('visuallyhidden')
	$('#modal-forms > #'+idf).removeClass('visuallyhidden')
})