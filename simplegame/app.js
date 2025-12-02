const title = document.getElementById("idk");
let playerChoice = prompt("enter num value between 1-3");
console.log(playerChoice);
const values = ["1", "2", "3"];
let botChoice = "";

function getBotChoice() {
  const randomValue = Math.floor(Math.random() * values.length);
  return values[randomValue];
}

botChoice = getBotChoice();
console.log(botChoice);

if (playerChoice === botChoice) {
  title.textContent = "Player wins";
  console.log("player wins");
} else if (playerChoice.toString !== botChoice) {
  title.textContent = "Bot wins";
  console.log("bot wins");
}
