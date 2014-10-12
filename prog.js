$(document).ready(function() {
	$('#prog').mouseenter(function() {
		$('#mess_bar').empty();
		$('#mess_bar').append("Updates: HackRU Fall 2014 Project: Healing Humanity");
	});

	$('#prog').mouseleave(function() {
		$('#mess_bar').empty();
		$('#mess_bar').append("Welcome to Yijin Kang's website! Hover over or click on one of the items above.");
	});

	var update = [
		'<h2>Yijin as a programmer</h2>',
			'<div class="left">',
				'<h3>Skills (In order of proficiency)</h3>',
				'<h4>Languages</h4>',
				'<ul class="fa-ul">',
					'<li><i class="fa fa-check"></i> Java</li>',
					'<li><i class="fa fa-check"></i> Javascript</li>',
					'<li><i class="fa fa-check"></i> HTML/CSS</li>',
					'<li><i class="fa fa-check"></i> C++</li>',
				'</ul>',
				'<h4>Software</h4>',
				'<ul class="fa-ul">',
					'<li><i class="fa fa-check"></i> Microsoft Office</li>',
					'<li><i class="fa fa-check"></i> Adobe Photoshop, Dreamweaver</li>',
					'<li><i class="fa fa-check"></i> Gimp</li>',
					'<li><i class="fa fa-check"></i> SAP</li>',
				'</ul>',
				'<h3>Work Experience</h3>',
				'<a href="http://sit-senexp.blogspot.com" target="_blank">Senior Experience internship at Stevens Institute of Technology</a>',
			'</div>',
			
			'<div class="right">',
				'<h3>Hackathon Experience</h3>',
				'<ul class="fa-ul">',
					'<li><i class="fa fa-check"></i> HackRU Fall 2014</li>',
					'<li><i class="fa fa-check"></i> Monthly Music Hackathon at Spotify September 2014</li>',
					'<li><i class="fa fa-check"></i> Code Day NY Spring 2014</li>',
					'<li><i class="fa fa-check"></i> hackBCA 2014</li>',
				'</ul>',
				'<h3>Completed Projects</h3>',
				'<a href="http://yucode.org/app/HealingHumanity.html" target="_blank"><h4>Healing Humanity</h4></a>',
				'<a href="TempoPerfect.html" target="_blank"><h4>Tempo Perfect</h4></a>',
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