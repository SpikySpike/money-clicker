var money = 0;
var sound_names = ["./sounds/sound1.wav", "./sounds/sound3.wav", "./sounds/sound5.wav"];
var sounds = [];
for (sound of sound_names) {
    sounds.add(sound);
}

function moneyAdd() {
  money++;
  document.getElementById("money").innerHTML = "Money: " + money + "$";

  if (money == "100") {
    const soundCheer = sounds[1];
    soundCheer.play();

    var cursorChange = document.getElementById("clickButton");
    cursorChange.style.cursor = "url(./img/coin-cursor-double.png), default!important";
  }
}

function audioRandom(sounds) {
  var soundRandom = [Math.floor(Math.random() * (sounds.length - 1))];
  return soundRandom;
}

function playAudio() {
  audio = audioRandom(sounds);
  audio.volume = 0.6;
  audio.play()
}

function backAudio() {
    const backMusic = new Audio('./sounds/backSound.mp3')
    backMusic.volume = 0.2;
    backMusic.loop = true;
    backMusic.play();
}
