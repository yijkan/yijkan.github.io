$(document).ready(function() {
	$('#cv').mouseenter(function() {
		$('#mess_bar').empty();
		$('#mess_bar').append("Coming soon!");
	});

	$('#cv').mouseleave(function() {
		$('#mess_bar').empty();
		$('#mess_bar').append("Welcome to Yijin Kang's website! Hover over or click on one of the items above.");
	});

	$('#cv').click(function() {
		$('.menu_item').css('background-color','#ECCAFC');
		$(this).css('background-color','#D270FF');
	});

	var update = [
		"<div class='left'>",

			"<div class='side'>",
				"<h3><a href='Yijin-Kang-CV.pdf'>Download PDF</a></h3>",
			"</div>",

			"<h3>Blah</h3>",
			'<i class="fa fa-check"></i> <br>',
		"</div>",
		
		
	]
	
	$('#cv').click(function() {
		$('#content').empty();
		$('#content').append(update.join(''));
	});
});