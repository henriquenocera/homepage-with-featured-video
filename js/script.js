const video = Wistia.api('zj3a9x9ua5');

function PlayPause() {
	if (video.state() === 'playing') {
		video.pause();
	} else {
		video.play();
		video.unmute();
	}
}

function changeIMG() {
	const playImg = document.querySelector('#play-img');
	const pauseImg = document.querySelector('#pause-img');

	playImg.classList.toggle('none');
	pauseImg.classList.toggle('block');
}
