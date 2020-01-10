var video = document.getElementById("bgVideo");
if (video.paused) {
  video.play();
}

var music = document.getElementById("musiclistener");
music.addEventListener("mousemove", function(){
  var audio = document.getElementById("player");
  audio.play();
});

function fallback(video)
{
  var img = video.querySelector('img');
  if (img) {
    video.parentNode.replaceChild(img, video);
  }
}
