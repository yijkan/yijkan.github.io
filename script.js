$(document).ready(function() {
    // Message Bar updates
	$('#home').mouseenter(function() {
		updateMB("Back to the landing page");
	});

	$('#prog').mouseenter(function() {
		updateMB("Updates: HackRU Fall 2014 Project: Healing Humanity");
	});

	$('#mus').mouseenter(function() {
		updateMB("Updates: SoundCloud link");
	});

	$('#econ').mouseenter(function() {
		updateMB("Updates: Fed Challenge 2015")
	});

	$('#cv').mouseenter(function() {
		updateMB("Updates: PDF now available!");
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

	$('#cv').click(function() {
		$('#content').load('pages/cv.txt');
	});

	$(window).scroll(sticky_relocate);
    sticky_relocate();
});

function updateMB (m) {
	$('#mess_bar').empty();
	$('#mess_bar').append(m);
}

function sticky_relocate() {
	console.log("entered function");
    var window_top = $(window).scrollTop();
    var div_top = $('#menu_a').offset().top;
    if (window_top > div_top) {
    	console.log("reached top");
        $('.menu_container').addClass('stick');
    } else {
    	console.log("exited top");
        $('.menu_container').removeClass('stick');
	}
}