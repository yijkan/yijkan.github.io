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
		'<div class="left">',

			'<div class="side">',
				'<h3>Instruments</h3>',
				'<i class="fa fa-check"></i> Violin<br>',
				'<i class="fa fa-check"></i> Mandolin<br>',
				'<i class="fa fa-check"></i> Piano<br>',
				'<i class="fa fa-check"></i> Viola<br>',
				'<i class="fa fa-check"></i> Guitar<br>',
			'</div>',
			
			'<h3>Ensembles</h3>',
			'<i class="fa fa-check"></i> BCA Pit Orchestra for <i>Kiss Me Kate</i><br>',
			'<i class="fa fa-check"></i> Bergen Youth Orchestra (Assistant Concertmaster)<br>',
			'<i class="fa fa-check"></i> BCA Concert Choir<br>',
			'<h4>Past</h4>',
			'<i class="fa fa-check"></i> BCA String Orchestra 2011-2013<br>',
			'<i class="fa fa-check"></i> BCA Pit Orchestra for <i>Brigadoon</i> (2013), <i>Bat Boy</i> (2014)<br>',
			'<i class="fa fa-check"></i> BCA Guitar and Mandolin Orchestra 2012-2014<br>',

			'<h3>Classes I\'ve Taken</h3>',
			'<i class="fa fa-check"></i> AP Music Theory<br>',
			'<i class="fa fa-check"></i> Musicians\' Workshop (buliding a ukelele)<br>',
			'<i class="fa fa-check"></i> Music & Society<br>',
			
			'<h3>K-Pop Covers</h3>',
			'Listen to my covers on <a href="https://soundcloud.com/ykviolin" target="_blank">SoundCloud</a>',
			
		'</div>', 
	]

	$('#mus').click(function() {
		$('#content').empty();
		$('#content').append(update.join(''));
	});
});