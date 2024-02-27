const choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let userScores = document.querySelector("#uscore");
let compScore = document.querySelector("#coscore");
let userWinCount = 0;
let compWinCount = 0;

const getCompChoices = () => {
  const options = ["rock", "paper", "scissors"];
  let currIdx = Math.floor(Math.random() * 3);
  return options[currIdx];
};
const gameDraw = () => {
  msg.innerText = "Game was Draw. Play again.";
  msg.style.backgroundColor = " rgb(202, 191, 67)";
};
const showsWineer = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userWinCount++;
    userScores.innerText = userWinCount;
    msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compWinCount++;
    compScore.innerText = compWinCount;
    msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  const compChoice = getCompChoices();

  if (userChoice ===compChoice) {
    gameDraw(); 
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissors" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showsWineer(userWin, userChoice, compChoice);

  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
