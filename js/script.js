const folder = "./sounds/";
const soundList = [
  "tyrtumpyrtum.mp3",
  "monalisa.mp3",
  "berlin.mp3",
  "wino.mp3",
  "wozy.mp3",
  "malpa.mp3",
  "pilka.mp3",
  "cztery.mp3",
  "tadek.mp3",
  "drzyz.mp3",
  "kaczki.mp3",
  "enter.mp3",
  "budzik.mp3",
  "ufo.mp3",
  "jasiu.mp3",
  "rymcymcym.mp3",
  "emeryt.mp3",
  "audi.mp3",
  "stach.mp3",
  "wagoniki.mp3",
  "pierdolamento.mp3",
  "bratanki.mp3",
  "faza.mp3",
  "jagiello.mp3",
  "waldek.mp3",
  "heweliusz.mp3",
  "dziewczyny.mp3",
  "hlup.mp3",
  "rymcim.mp3",
  "umciaumcia.mp3",
  "wiwacik.mp3",
  "bumcykcyk.mp3",
  "maluszek.mp3",
  "faza.mp3",
];
const shots = document.getElementById("shots");

let shots_amount = 0;
let shuffled_array = shuffle(soundList);
let playing = null;
let currentSound = new Audio(folder + shuffled_array.pop());

const volumeSlider = document.getElementById("volumeSlider");
volumeSlider
  .addEventListener("input", adjustVolume)
  .addEventListener("touchmove", adjustVolume);

function pijemy() {
  if (pauza) {
    currentSound.play();
  } else if (playing) {
    return;
  }
  playing = true;
  currentSound.play();
  currentSound.onended = function () {
    playing = false;
    shots_amount++;
    shots.textContent = shots_amount;
    return (currentSound = new Audio(folder + shuffled_array.pop()));
  };
}

function pauza() {
  currentSound.pause();
}

function adjustVolume() {
  if (currentSound) {
    currentSound.volume = volumeSlider.value;
  }
}

// Shuffles the array in place
function shuffle(array) {
  // Loop over the array from the last element to the first
  for (let i = array.length - 1; i > 0; i--) {
    // Pick a random index from 0 to i
    let j = Math.floor(Math.random() * (i + 1));
    // Swap the elements at i and j
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
