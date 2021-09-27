let money = 0;
let sounds = new Audio([
  "./sounds/sound1.wav",
  "./sounds/sound3.wav",
  "./sounds/sound5.wav",
]);

function moneyAdd() {
  money++;
  document.getElementById("money").innerHTML = "Money: " + money + "$";

  if (money == "100") {
    const soundCheer = new Audio("./sounds/sound3.wav");
    soundCheer.play();

    const cursorChange = document.getElementById("clickButton");
    cursorChange.style.cursor = "url(img/coin-cursor-double.png), default!important";
  }
}

function audioRandom(sounds) {
  let soundRandom = [Math.floor(Math.random() * sounds.length)];
  soundRandom.play();
}

function playAudio() {
  const audio = new Audio("./sounds/sound1.wav");
  audio.volume = 0.6;
  audio.play();
}

function backAudio() {
    const backMusic = new Audio('./sounds/backSound.mp3')
    backMusic.volume = 0.2;
    backMusic.loop = true;
    backMusic.play();
}