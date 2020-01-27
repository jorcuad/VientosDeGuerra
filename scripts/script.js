var video = document.getElementById("bgVideo");
if (video.paused) {
  video.play();
}

function fallback(video)
{
  var img = video.querySelector('img');
  if (img) {
    video.parentNode.replaceChild(img, video);
  }
}

function playmusic() {
  var chain = document.getElementById("chain");
  chain.play();
  var audio = document.getElementById("player");
  audio.play();
  var missions = document.getElementById("missions");
  missions.classList.add("fall");

  setTimeout(function(){
    createDiag( individual );
  },1200);

  setTimeout(function(){
    document.getElementById("bartender").style.display = "none";
  }, 8000)
}
