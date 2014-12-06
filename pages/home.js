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
		'<h2>Home</h2>',
		'<h3>About Yijin</h3>',
		'<p>I am a senior in the business and finance academy at Bergen County Academies, currently interning at Stevens Institute of Technology for front- and back-end development. ',
		'I intend to major in computer science in college with some additional coursework in economics as well as music. <br>',
		'</p>',
		'<h3>Contact Me</h3>',
		'<a href="https://github.com/yijkan" target="_blank"><i class="fa fa-github-square fa-3x"></i></a>',
		'<a href="https://www.facebook.com/yijin.kang" target="_blank"><i class="fa fa-facebook-square fa-3x"></i></a>',
		'<a href="mailto:yijinkang@gmail.com" target="_top"><i class="fa fa-envelope-square fa-3x"></i></a>',
	]

	$('#home').click(function() {
		$('#content').empty();
		$('#content').append(update.join(''));
	});
	
});