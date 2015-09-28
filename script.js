$(document).ready(function() {
	// Message Bar updates
	$('#home').mouseenter(function() {
		updateMB("Back to the landing page");
	});

	$('#prog').mouseenter(function() {
		updateMB("Updates: PennApps Fall 2015 Project: My Little Budget Book");
	});

	$('#mus').mouseenter(function() {
		updateMB("Updates: CMU String Ensemble");
	});

	$('#econ').mouseenter(function() {
		updateMB("Updates: Bloomberg FX Essentials Certification")
	});

	$('#cv').mouseenter(function() {
		updateMB("Coming soon!");
	});

	$('.menu_item').mouseleave(function() {
		$('#mess_bar').empty();
		$('#mess_bar').append("Welcome to Yijin Kang's website! Hover over or click on one of the items above.");
	});

    // menu item updates
	$('.menu_item').click(function() {
		$('.menu_item').removeClass('clicked');
		$(this).addClass('clicked');
	});

    // content updates
	$('#home').click(function() {
		$('#content').load('pages/home.txt');
	});

	$('#prog').click(function() {
		$('#content').load('pages/prog.txt');
	});

	$('#mus').click(function() {
		$('#content').load('pages/mus.txt');
	});

	$('#econ').click(function() {
		$('#content').load('pages/econ.txt');
	});

	// $('#cv').click(function() {
	// 	$('#content').load('pages/cv.txt');
	// });

	$(window).scroll(function() {
		sticky_relocate();
	});
    sticky_relocate();
});

function updateMB (m) {
	$('#mess_bar').empty();
	$('#mess_bar').append(m);
}

function sticky_relocate() {
    var window_top = $(window).scrollTop();
    var div_top = $('#menu_a').offset().top;
    if (window_top > div_top) {
    	// $('#menu_placeholder').show();
    	$('#menu_placeholder').css('height',document.getElementById('menu_container').offsetHeight);
        $('#menu_container').addClass('stick');
    } else {
    	// $('#menu_placeholder').hide();
    	$('#menu_placeholder').css('height',0);
    	$('#menu_container').removeClass('stick');
	}
}