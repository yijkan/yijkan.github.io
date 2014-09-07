$(document).ready(function() {
	$('#econ').mouseenter(function() {
		$('#mess_bar').empty();
		$('#mess_bar').append("Coming soon!");
	});

	$('#econ').mouseleave(function() {
		$('#mess_bar').empty();
		$('#mess_bar').append("Welcome to Yijin Kang's website! Hover over or click on one of the items above.");
	});

	var update = [
		"<h2>Yijin as an economist</h2>",
			
		"<div class='left'>",
			"<h3>Classes I've taken</h3>",
			"<ul>",
				"<li>IB Economics HL</li>",
				"<li>Marketing</li>",
				"<li>Management</li>",
				"<li>Management Information Systems</li>",
				"<li>Accounting & Finance</li>",
				"<li>Business Administration</li>",
			"</ul>",
		"</div>",
		
		"<div class='right'>",
			"<h3>Extracurriculars</h3>",
			"<h4>Fed Challenge</h4>",

			"<h4>DECA</h4>",
			"<ul>",
				"<li>2014 States Second Place; National Qualifier</li>",
				"<li>2013 States First Place</li>",
			"</ul>",
		"<div>",
	]
	
	$('#econ').click(function() {
		$('#content').empty();
		$('#content').append(update.join(''));
	});
});