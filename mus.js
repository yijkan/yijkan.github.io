$(document).ready(function() {
	$('#mus').mouseenter(function() {
		$('#mess_bar').empty();
		$('#mess_bar').append("Coming soon!");
	});
	
	$('#mus').mouseleave(function() {
		$('#mess_bar').empty();
		$('#mess_bar').append("Welcome to Yijin Kang's website! Hover over or click on one of the items above.");
	});

	var update = [
		'<h2>Yijin as a musician</h2>',
			
		'<div class="left">',
			'<h3>Instruments</h3>',
			'<ul>',
				'<li>Violin</li>',
				'<li>Piano</li>',
				'<li>Viola</li>',
				'<li>Guitar</li>',
			'</ul>',
		'</div>',
		
		'<div class="right">',
			'<h3>K-Pop Covers</h3>',
			'<a><h4></h4></a>',
		'<div>'
	]

	$('#mus').click(function() {
		$('#content').empty();
		$('#content').append(update.join(''));
	});
});