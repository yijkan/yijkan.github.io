$(document).ready(function() {
	$('#home').mouseenter(function() {
		$('#mess_bar').empty();
		$('#mess_bar').append("Back to the landing page");
	});

	$('#home').mouseleave(function() {
		$('#mess_bar').empty();
		$('#mess_bar').append("Welcome to Yijin Kang's website! Hover over or click on one of the items above.");
	});

	$('#home').click(function() {
		$('.menu_item').css('background-color','#ECCAFC');
		$(this).css('background-color','#D270FF');
	});

	var update = [
		'<div class="left">',
			'<div class="side">',
				'<h3>Contact Me</h3>',
				'<a href="https://github.com/yijkan" target="_blank"><i class="fa fa-github-square fa-3x"></i></a>',
				'<a href="https://www.facebook.com/yijin.kang" target="_blank"><i class="fa fa-facebook-square fa-3x"></i></a>',
				'<a href="mailto:yijinkang@gmail.com" target="_top"><i class="fa fa-envelope-square fa-3x"></i></a>',
			'</div>',

			'<h3>About Yijin</h3>',
			'<p>I am a senior at Bergen County Academies in the Academy for Business and Finance (IB diploma candidate). I am also heavily involved in music at my school and in my local community. On Wednesdays I do front- and back-end development for a professor at Stevens Institute of Technology. I intend to major in computer science in college with some additional coursework in economics as well as music. </p>',
		'</div>',
	]


	$('#home').click(function() {
		$('#content').empty();
		$('#content').append(update.join(''));
	});
	
});