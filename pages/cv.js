$(document).ready(function() {
	$('#cv').mouseenter(function() {
		$('#mess_bar').empty();
		$('#mess_bar').append("Updates: PDF now available!");
	});

	$('#cv').mouseleave(function() {
		$('#mess_bar').empty();
		$('#mess_bar').append("Welcome to Yijin Kang's website! Hover over or click on one of the items above.");
	});

	var update = [
		"<div class='left'>",

			"<div class='side'>",
				"<h3><a href='Yijin-Kang-CV.pdf'>Download PDF</a></h3>",
			"</div>",

			'<h3>Jump to</h3>',
			'<a href="#edu">Education</a><br>',
			'<a href="#skl">Technology Skills</a><br>',
			'<a href="#lang">World Languages</a><br>',
			'<a href="#exp">Experience</a><br>',
			'<a href="#ec">Extracurriculars</a><br>',
			'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="#mcs">Math & Computer Science</a><br>',
			'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="#abf">Business & Finance</a><br>',
			'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="#msc">Music</a><br>',
			'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="#oth">Other</a><br>',

			'<h3 id="edu">Education</h3>',
			'<h3 id="skl">Technology Skills</h3>',
			'<h3 id="lang">World Languages</h3>',
			'<h3 id="exp">Experience</h3>',
			'<h3 id="ec">Extracurriculars</h3>',
			'<h4 id="mcs">Math & Computer Science</h4>',
			'<h4 id="abf">Business & Finance</h4>',
			'<h4 id="msc">Music</h4>',
			'<h4 id="oth">Other</h4>',
		"</div>",
		
		
	]
	
	$('#cv').click(function() {
		$('#content').empty();
		$('#content').append(update.join(''));
	});
});