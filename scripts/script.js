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
  document.getElementById("bartender").classList.add("show");
  document.getElementById("goblin").classList.add("show");
  document.getElementById("dialog-text").classList.add("show");
  document.getElementById("dialog").classList.add("show");

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
    document.getElementById("goblin").classList.remove("show");
    document.getElementById("dialog-text").classList.remove("show");
    document.getElementById("dialog").classList.remove("show");
    document.getElementById("goblin").classList.add("hidden");
    document.getElementById("dialog-text").classList.add("hidden");
    document.getElementById("dialog").classList.add("hidden");

  }, 8000)
}

var tabs = new Tabby('[data-tabs]');
