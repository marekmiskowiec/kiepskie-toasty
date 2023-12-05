const soundList = ["emerytura.mp3"];

let currentSound = new Audio("sounds/emerytura.mp3");

function pijemy() {
  currentSound.play();
}

function pauza() {
  currentSound.pause();
}
