const video = Wistia.api('zj3a9x9ua5');

function PlayPause() {
	if (video.state() === 'playing') {
		video.pause();
	} else {
		video.play();
		video.unmute();
	}
}

function changeButton() {
	const playButton = document.querySelector('#play-button');
	const pauseButton = document.querySelector('#pause-button');

	playButton.classList.toggle('none');
	pauseButton.classList.toggle('none');
}
