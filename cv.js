$(document).ready(function() {
	$('#cv').mouseenter(function() {
		$('#mess_bar').empty();
		$('#mess_bar').append("Coming soon!");
	});

	$('#cv').mouseleave(function() {
		$('#mess_bar').empty();
		$('#mess_bar').append("Welcome to Yijin Kang's website! Hover over or click on one of the items above.");
	});

	var update = [
		"<h2>Yijin's Curriculum Vitae</h2>",

		"<a href='Yijin-Kang-CV.pdf'>Download a PDF version here</a>",
		
		"<div class='left'>",
			"<h3>Blah</h3>",
			"<ul class='fa-ul'>",
				'<li><i class="fa fa-check"></i> </li>',
			"</ul>",
		"</div>",
		
		"<div class='right'>",
			"<h3>Blah</h3>",
			"<a><h4L></h4></a>",
		"<div>"
	]
	
	$('#cv').click(function() {
		$('#content').empty();
		$('#content').append(update.join(''));
	});
});