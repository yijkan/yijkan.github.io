$(document).ready(function() {
	$('#econ').mouseenter(function() {
		$('#mess_bar').empty();
		$('#mess_bar').append("Updates: Fed Challenge 2015");
	});

	$('#econ').mouseleave(function() {
		$('#mess_bar').empty();
		$('#mess_bar').append("Welcome to Yijin Kang's website! Hover over or click on one of the items above.");
	});

	$('#econ').click(function() {
		$('.menu_item').css('background-color','#ECCAFC');
		$(this).css('background-color','#D270FF');
	});

	var update = [
		"<h2>Yijin as an economist</h2>",
			
		"<div class='left'>",
			"<h3>Classes I've taken</h3>",
			"<ul class='fa-ul'>",
				"<li><i class='fa fa-check'></i> IB Economics HL</li>",
				"<li><i class='fa fa-check'></i> Marketing</li>",
				"<li><i class='fa fa-check'></i> Management</li>",
				"<li><i class='fa fa-check'></i> Management Information Systems</li>",
				"<li><i class='fa fa-check'></i> Accounting & Finance</li>",
				"<li><i class='fa fa-check'></i> Business Administration</li>",
			"</ul>",
		"</div>",
		
		"<div class='right'>",
			"<h3>Extracurriculars</h3>",
			"<h4>Fed Challenge</h4>",
			"<ul class='fa-ul'>",
				"<li><i class='fa fa-check'></i> 2015 Team member</li>",
				"<li><i class='fa fa-check'></i> 2014 Supporting researcher for 3rd place team</li>",
			"</ul>",

			"<h4>DECA</h4>",
			"<ul class='fa-ul'>",
				"<li><i class='fa fa-check'></i> 2014 States Second Place; National Qualifier</li>",
				"<li><i class='fa fa-check'></i> 2013 States First Place</li>",
			"</ul>",
		"<div>",
	]
	
	$('#econ').click(function() {
		$('#content').empty();
		$('#content').append(update.join(''));
	});
});