$(document).ready(function() {
	$('#prog').mouseenter(function() {
		$('#mess_bar').empty();
		$('#mess_bar').append("Updates: HackRU Fall 2014 Project: Healing Humanity");
	});

	$('#prog').mouseleave(function() {
		$('#mess_bar').empty();
		$('#mess_bar').append("Welcome to Yijin Kang's website! Hover over or click on one of the items above.");
	});

	$('#prog').click(function() {
		$('.menu_item').css('background-color','#ECCAFC');
		$(this).css('background-color','#D270FF');
	});

	var update = [
		'<div class="left">',

			'<div class="side">',
				'<h3>Skills</h3>',
				'<i class="fa fa-check"></i> Java<br>',
				'<i class="fa fa-check"></i> Javascript<br>',
				'<i class="fa fa-check"></i> Database design with MySQL<br>',
				'<i class="fa fa-check"></i> JDBC<br>',
				'<i class="fa fa-check"></i> HTML/CSS<br>',
				'<i class="fa fa-check"></i> C++<br>',

				'<h4>Software</h4>',
				'<i class="fa fa-check"></i> Adobe Photoshop, Dreamweaver<br>',
				'<i class="fa fa-check"></i> Gimp<br>',
				'<i class="fa fa-check"></i> SAP<br>',
			'</div>',

			'<h3>Work Experience</h3>',
			'<h4>Database designer intern</h4>',
			'<p>Stevens Institute of Technology. Reflections <a href="http://sit-senexp.blogspot.com" target="_blank">here</a>',
			'<h4>Course materials writer intern</h4>',
			'<p>Ad Astra Education</p>',

			'<h3>Completed Projects</h3>',
			'<h4><a href="http://yucode.org/app/healinghumanity" target="_blank">Healing Humanity</a></h4>',
			'<p>A body\'s individual parts must all be kept alive in order for the body to survive, much like the Earth itself</p>',
			'<p id="note">Made at HackRU Fall 2014</p>',

			'<h4><a href="https://www.dropbox.com/s/a28dzw5zaywvmok/MathFormulaSaver.zip" target="_blank">Math Formula Saver</a></h4>',
			'<p>A calculator that can save formulas for future use</p>',
			'<p id="note">Made at CodeDay NY Spring 2014</p>',
			
			'<h4><a href="https://www.dropbox.com/sh/w4s8qm2g7atck5a/ELyxtcfu6N" target="_blank">Elima-Click</a></h4>',
			'<p>Click the blocks to change their color until you get a row that matches color. Don\'t let the blocks reach the top!</p>',
			'<p id="note">Improvements being made. Made at HackRU Spring 2014</p>',

			'<h4><a href="https://www.dropbox.com/s/b71byvk2dicd5ts/FighterJetTakesTheSky.zip" target="_blank">Fighter Jet Takes the Sky</a></h4>',
			'<p>The classic helicoptor game turned into a plane game. Control the plane to avoid the missiles but keep it on the screen!</p>',
			'<p id="note">Made at hackBCA 2014</p>',

			'<h3>In Progress</h3>',
			'<h4></h4>',
			
			'<h4><a href="TempoPerfect/TempoPerfect.html" target="_blank">Tempo Perfect</a></h4>',
			'<p>Test your skills at maintaining a steady tempo!</p>',
			'<p id="note">Currently not working. Made at Monthly Music Hackathon at Spotify September 2014</li>',

		'</div>'
	]
	
	$('#prog').click(function() {
		$('#content').empty();
		$('#content').append(update.join(''));
	});
});