$(document).ready(function() {
	$('#prog').mouseenter(function() {
		$('#mess_bar').empty();
		$('#mess_bar').append("Updates: Tempo Perfect (Monthly Music Hackathon Sep 2014)");
	});

	$('#prog').mouseleave(function() {
		$('#mess_bar').empty();
		$('#mess_bar').append("Welcome to Yijin Kang's website! Hover over or click on one of the items above.");
	});

	var update = [
		'<h2>Yijin as a programmer</h2>',
			'<div class="left">',
				'<h3>Skills (In order of proficiency)</h3>',
				'<ul>',
					'<li>Java</li>',
					'<li>Javascript</li>',
					'<li>HTML/CSS</li>',
					'<li>C++</li>',
				'</ul>',
				'<h3>Hackathon Experience</h3>',
				'<ul>',
					'<li>Monthly Music Hackathon at Spotify September 2014</li>',
					'<li>Code Day NY Spring 2014</li>',
					'<li>hackBCA 2014</li>',
				'</ul>',
			'</div>',
			
			'<div class="right">',
				'<h3>Completed Projects</h3>',
				'<a href="TempoPerfect.html"><h4>Tempo Perfect</h4></a>',
				'<p>Test your skills at maintaining a steady tempo!</p>',
			
				'<h3>In Progress</h3>',
				'<h4></h4>',
			'<div>',
	]
	
	$('#prog').click(function() {
		$('#content').empty();
		$('#content').append(update.join(''));
	});
});