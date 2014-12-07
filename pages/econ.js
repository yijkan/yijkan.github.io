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
		"<div class='left'>",
			"<div class='side'>",
				"<h3>Classes I've taken</h3>",
				"<i class='fa fa-check'></i> IB Economics HL<br>",
				"<i class='fa fa-check'></i> Marketing<br>",
				"<i class='fa fa-check'></i> Management<br>",
				"<i class='fa fa-check'></i> Management Information Systems<br>",
				"<i class='fa fa-check'></i> Accounting & Finance<br>",
				"<i class='fa fa-check'></i> Business Administration<br>",
			"</div>",

			"<h3>Competitions</h3>",
			"<h4>Fed Challenge</h4>",
			"<i class='fa fa-check'></i> 2015 Team member<br>",
			"<i class='fa fa-check'></i> 2014 Supporting researcher for 3rd place team<br>",

			"<h4>DECA</h4>",
			"<i class='fa fa-check'></i> 2014 States Second Place; National Qualifier<br>",
			"<i class='fa fa-check'></i> 2013 States First Place<br>",
		"</div>",
		
	]
	
	$('#econ').click(function() {
		$('#content').empty();
		$('#content').append(update.join(''));
	});
});