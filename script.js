console.log('hello world');
var button = document.getElementsByClassName('button-link')[0];

setInterval( function() {
	console.log('start blink');

	if(button.classList.contains('text-orange')) {
		console.log('already orange');
		button.classList.remove('text-orange');
	} else {
		button.classList.add('text-orange');
		console.log('needs orange');
	}

	console.log('end blink');

}, 500)