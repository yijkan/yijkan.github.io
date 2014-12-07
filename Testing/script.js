$(document).ready(function() {
	$('#home').click(function() {
		$('#content').load('home.txt');
	});

	$('#prog').click(function() {
		$('#content').load('prog.txt');
	});

	$('#mus').click(function() {
		$('#content').load('mus.txt');
	});

	$('#econ').click(function() {
		$('#content').load('econ.txt');
	});

	$('#cv').click(function() {
		$('#content').load('prog.txt');
	});
});