//elements

const word = document.getElementById("word"); //h3
const text = document.getElementById("input_area"); //input
const scoreEl = document.getElementById("score"); // ochko span
const timeEl = document.getElementById("time"); // time span
const endGameEl = document.getElementById("end_game");

const words = [
  "ashtray",
  "employment",
  "receptionist",
  "rook",
  "stay",
  "strictly",
  "abroad",
  "foreign",
  "overseas",
  "driving ",
  "blanket",
  "leave",
  "leader",
  "leading",
  "trip",
  "eathusiastic",
  "require",
  "advetise",
  "do",
  "simple",
  "map",
  "html",
  "lorem",
  "ipsum",
  "sample",
  "future",
  "foreach",
  "min",
  "display",
  "resident",
  "popular",
  "destination",
  "motivate",
  "edition",
  "algoritm",
  "terrible",
  "dreadful",
  "tap",
  "app",
  "javascript",
  "justify",
  "quarterly",
  "correct",
];

let randomWord;

let score = 0;
let time = 60;
function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}
console.log(words);
function addToDom() {
  randomWord = getRandomWord();
  word.innerHTML = randomWord;
}

function updateScore() {
  score++;
  scoreEl.innerHTML = score;
}

function updateTime() {
  time--;
  timeEl.innerHTML = time + "s";

  if (time === 0) {
    gameOver();
    clearInterval(timeInterval);
  }
}

const timeInterval = setInterval(updateTime, 1000);

function gameOver() {
  endGameEl.innerHTML = `
    <h1>Vaqt tugadii!! </h3>
    <h3>Sizning Natijangiz:${score}</h3>
    <button onclick = "location.reload()">Yangilash</button>
    `
  endGameEl.style.display = "flex";
}

addToDom();
text.addEventListener("input", (e) => {
  const typedText = e.target.value;

  if (typedText === randomWord) {
    updateScore(); //++1
    addToDom();
    e.target.value = "";
    updateTime();
  }
});
