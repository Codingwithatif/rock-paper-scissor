let userScore = 0;
let compScore = 0;

//for accessing html in javascript
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorePara = document.querySelector("#user-score");
const compscorePara = document.querySelector("#comp-score");

//for computer choice
const gencompchoice = () => {
  const options = ["rock", "paper", "scissor"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

//for draw game
const drawGame = () => {
  msg.innerText = "Draw : Try Again";
  msg.style.backgroundColor = "purple";
};

//for show winner
const showWiner = (userWin, userChoice, compchoice) => {
  if (userWin) {
    userScore++;
    userscorePara.innerText = userScore;
    msg.innerText = `You Win! ${userChoice} beats ${compchoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compscorePara.innerText = compScore;
    msg.innerText = `Oops You loose! ${compchoice} beats ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

//game logic how it works
const playGame = (userChoice) => {
  const compchoice = gencompchoice();

  if (userChoice === compchoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compchoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compchoice === "scissor" ? false : true;
    } else {
      userWin = compchoice === "rock" ? false : true;
    }
    showWiner(userWin, userChoice, compchoice);
  }
};

//for user choice
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    let userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
