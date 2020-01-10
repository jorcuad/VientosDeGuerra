// Pause and play the video, and change the button text
function myFunction() {
  // Get the video
  var video = document.getElementById("myVideo2");

  // Get the button
  var btn = document.getElementById("myBtn");
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}

var music = document.getElementById("musiclistener");
music.addEventListener("mousemove", function(){
  var audio = document.getElementById("player");
  audio.play();
});

music.on('click touchstart', function () {
        const videoElement = document.getElementById('myVideo2');
        if (videoElement.playing) {
            // video is already playing so do nothing
        }
        else {
            // video is not playing
            // so play video now
            videoElement.play();
        }
});
