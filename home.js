$(document).ready(function() {
	$('#home').mouseenter(function() {
		$('#mess_bar').empty();
		$('#mess_bar').append("Back to the landing page");
	});
	$('#home').mouseleave(function() {
		$('#mess_bar').empty();
		$('#mess_bar').append("Welcome to Yijin Kang's website! Hover over or click on one of the items above.");
	});

	var update = [
		'<h2>Home</h2>',
		'<h3>About Yijin</h3>',
		'<p>I am a senior in the business and finance academy at Bergen County Academies.</p>',
		'<p>However, I intend to major in computer science in college with some additional coursework in economics as well as music.</p>',
		'<p>Here is some more filler text.</p>'
	]

	$('#home').click(function() {
		$('#content').empty();
		$('#content').append(update.join(''));
	});
	
});