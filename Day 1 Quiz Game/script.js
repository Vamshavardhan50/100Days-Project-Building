const startBtn = document.querySelector(".start-btn");
const startScreen = document.querySelector(".start-screen");
const quizGame = document.querySelector(".quiz-game");
const endScreen = document.querySelector(".end-screen");
const scoreId = document.querySelectorAll(".score-id");
const restartbtn = document.querySelector(".restart");
const QuestionNumber = document.querySelector(".Question-id");

quizGame.classList.add("hidden");
endScreen.classList.add("hidden");

startBtn.addEventListener("click", () => {
  startScreen.classList.add("hidden");
  quizGame.classList.remove("hidden");
  loadQuestion();
});
restartbtn.addEventListener("click", () => {
  startScreen.classList.remove("hidden");
  endScreen.classList.add("hidden");
  CurrentQuestionIndex = 0;
  score = 0;
});

// questions
const questions = [
  {
    question: "What is 2 + 2?",
    options: ["1", "2", "3", "4"],
    correctIndex: 3,
  },
  {
    question: "Capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    correctIndex: 2,
  },
];

const questionHeader = document.querySelector(".quiz-header");
const optionsContainer = document.querySelector(".options");

let CurrentQuestionIndex = 0;

function loadQuestion() {
  const CurrentQuestion = questions[CurrentQuestionIndex];
  QuestionNumber.textContent = CurrentQuestionIndex + 1;
  questionHeader.textContent = CurrentQuestion.question;

  optionsContainer.innerHTML = "";

  CurrentQuestion.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.classList.add("btn");

    button.addEventListener("click", () => {
      handleAnswer(index);
    });

    optionsContainer.appendChild(button);
  });
}

let score = 0;

function handleAnswer(selectedIndex) {
  let CorrectIndex = questions[CurrentQuestionIndex].correctIndex;

  if (selectedIndex === CorrectIndex) {
    score++;
    scoreId[0].textContent = score;
  }
  CurrentQuestionIndex++;

  if (CurrentQuestionIndex === questions.length) {
    showEndScreen();
  } else {
    loadQuestion();
  }
}

function showEndScreen() {
  quizGame.classList.add("hidden");
  endScreen.classList.remove("hidden");
  scoreId[1].textContent = score;
}
