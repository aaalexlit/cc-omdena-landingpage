var video = document.getElementById("video-start");
video.addEventListener('loadedmetadata', function() {
	video.currentTime = 3;
});