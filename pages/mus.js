$(document).ready(function() {
	$('#mus').mouseenter(function() {
		$('#mess_bar').empty();
		$('#mess_bar').append("Updates: SoundCloud link");
	});
	
	$('#mus').mouseleave(function() {
		$('#mess_bar').empty();
		$('#mess_bar').append("Welcome to Yijin Kang's website! Hover over or click on one of the items above.");
	});

	$('#mus').click(function() {
		$('.menu_item').css('background-color','#ECCAFC');
		$(this).css('background-color','#D270FF');
	});

	var update = [
		'<h2>Yijin as a musician</h2>',
		
		'<div class="left">',

			'<div class="side">',
				'<h3>K-Pop Covers</h3>',
				'<p><a href="https://soundcloud.com/ykviolin" target="_blank">SoundCloud</a></p>',
			'</div>',
			
			'<h3>Instruments</h3>',
			'<ul class="fa-ul">',
				'<li><i class="fa fa-check"></i> Violin</li>',
				'<li><i class="fa fa-check"></i> Piano</li>',
				'<li><i class="fa fa-check"></i> Viola</li>',
				'<li><i class="fa fa-check"></i> Guitar</li>',
			'</ul>',
			

		'</div>', 
	]

	$('#mus').click(function() {
		$('#content').empty();
		$('#content').append(update.join(''));
	});
});