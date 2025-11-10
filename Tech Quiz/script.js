const questions = [
  {
    question: "What does HTML stand for?",
    answers: [
      { text: "Hyper Text Markup Language", correct: true },
      { text: "High Transfer Machine Learning", correct: false },
      { text: "Hyperlink Text Management Language", correct: false },
      { text: "Home Tool Markup Language", correct: false }
    ]
  },
  {
    question: "Which company developed JavaScript?",
    answers: [
      { text: "Netscape", correct: true },
      { text: "Google", correct: false },
      { text: "Microsoft", correct: false },
      { text: "Sun Microsystems", correct: false }
    ]
  },
  {
    question: "Which symbol is used for comments in JavaScript?",
    answers: [
      { text: "//", correct: true },
      { text: "/* */", correct: false },
      { text: "<!-- -->", correct: false },
      { text: "#", correct: false }
    ]
  },
  {
    question: "Which of the following is NOT a JavaScript data type?",
    answers: [
      { text: "String", correct: false },
      { text: "Number", correct: false },
      { text: "Float", correct: true },
      { text: "Boolean", correct: false }
    ]
  },
  {
    question: "What keyword is used to declare a constant in JavaScript?",
    answers: [
      { text: "let", correct: false },
      { text: "const", correct: true },
      { text: "var", correct: false },
      { text: "static", correct: false }
    ]
  },
  {
    question: "Which method is used to parse a JSON string into a JavaScript object?",
    answers: [
      { text: "JSON.stringify()", correct: false },
      { text: "JSON.parse()", correct: true },
      { text: "parse.JSON()", correct: false },
      { text: "JSON.toObject()", correct: false }
    ]
  },
  {
    question: "Which operator is used to compare both value and type in JavaScript?",
    answers: [
      { text: "==", correct: false },
      { text: "=", correct: false },
      { text: "===", correct: true },
      { text: "!==", correct: false }
    ]
  },
  {
    question: "What will `typeof null` return in JavaScript?",
    answers: [
      { text: "'object'", correct: true },
      { text: "'null'", correct: false },
      { text: "'undefined'", correct: false },
      { text: "'number'", correct: false }
    ]
  },
  {
    question: "Which built-in method removes the last element from an array?",
    answers: [
      { text: "push()", correct: false },
      { text: "pop()", correct: true },
      { text: "shift()", correct: false },
      { text: "slice()", correct: false }
    ]
  },
  {
    question: "What is the output of '2' + 2 in JavaScript?",
    answers: [
      { text: "4", correct: false },
      { text: "'22'", correct: true },
      { text: "NaN", correct: false },
      { text: "undefined", correct: false }
    ]
  },
  // Continue adding after your existing 10 questions
{
  question: "Which keyword is used to create a class in JavaScript?",
  answers: [
    { text: "class", correct: true },
    { text: "object", correct: false },
    { text: "function", correct: false },
    { text: "constructor", correct: false }
  ]
},
{
  question: "How do you write an arrow function that returns 'Hello'?",
  answers: [
    { text: "() => 'Hello'", correct: true },
    { text: "() => { return Hello }", correct: false },
    { text: "=> 'Hello'", correct: false },
    { text: "function => 'Hello'", correct: false }
  ]
},
{
  question: "What does the 'this' keyword refer to in JavaScript (in a regular function)?",
  answers: [
    { text: "The global object", correct: true },
    { text: "The function itself", correct: false },
    { text: "The parent function", correct: false },
    { text: "The event handler", correct: false }
  ]
},
{
  question: "What is the purpose of the 'async' keyword in JavaScript?",
  answers: [
    { text: "To make a function asynchronous", correct: true },
    { text: "To pause JavaScript execution", correct: false },
    { text: "To run code in parallel threads", correct: false },
    { text: "To define a callback function", correct: false }
  ]
},
{
  question: "Which function is used to select an element by its ID in the DOM?",
  answers: [
    { text: "document.querySelector()", correct: false },
    { text: "document.getElementById()", correct: true },
    { text: "document.getElementsByClassName()", correct: false },
    { text: "document.findElement()", correct: false }
  ]
},
{
  question: "What will `console.log(typeof NaN)` output?",
  answers: [
    { text: "'number'", correct: true },
    { text: "'NaN'", correct: false },
    { text: "'undefined'", correct: false },
    { text: "'object'", correct: false }
  ]
},
{
  question: "Which method adds one or more elements to the end of an array?",
  answers: [
    { text: "push()", correct: true },
    { text: "pop()", correct: false },
    { text: "unshift()", correct: false },
    { text: "concat()", correct: false }
  ]
},
{
  question: "What will `Boolean('')` return?",
  answers: [
    { text: "false", correct: true },
    { text: "true", correct: false },
    { text: "undefined", correct: false },
    { text: "NaN", correct: false }
  ]
},
{
  question: "How can you prevent an event’s default behavior in JavaScript?",
  answers: [
    { text: "event.stop()", correct: false },
    { text: "event.preventDefault()", correct: true },
    { text: "event.returnFalse()", correct: false },
    { text: "event.block()", correct: false }
  ]
},
{
  question: "Which JavaScript method can be used to delay function execution?",
  answers: [
    { text: "setTimeout()", correct: true },
    { text: "delay()", correct: false },
    { text: "wait()", correct: false },
    { text: "setInterval()", correct: false }
  ]
}

];


const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const scoreContainer = document.getElementById("score-container");
const scoreElement = document.getElementById("score");
const restartButton = document.getElementById("restart-btn");
const timerElement = document.getElementById("timer");
const questionNumberElement = document.getElementById("question-number");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  scoreContainer.classList.add("hide");
  nextButton.classList.remove("hide");
  showQuestion();
}

function showQuestion() {
  resetState();
  const currentQuestion = questions[currentQuestionIndex];
   questionNumberElement.textContent = `Question: ${currentQuestionIndex + 1} / ${questions.length}`;
  questionElement.textContent = currentQuestion.question;

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.textContent = answer.text;
    button.classList.add("btn");
    button.addEventListener("click", () => selectAnswer(answer));
    answerButtons.appendChild(button);
  });
   startTimer();
}

function resetState() {
  clearInterval(timer);
  timeLeft = 15;
  timerElement.textContent = "";
  nextButton.style.display = "none";
  answerButtons.innerHTML = "";
}

function startTimer() {
  timerElement.textContent = `Time Left: ${timeLeft}s`;
  timer = setInterval(() => {
    timeLeft--;
    timerElement.textContent = `Time Left: ${timeLeft}s`;

    if (timeLeft <= 0) {
      clearInterval(timer);
      // Automatically go to next question if time runs out
      currentQuestionIndex++;
      if (currentQuestionIndex < questions.length) {
        showQuestion();
      } else {
        showScore();
      }
    }
  }, 1000);
}

function selectAnswer(answer) {
    clearInterval(timer);
  const correct = answer.correct;
  if (correct) score++;
  Array.from(answerButtons.children).forEach(button => {
    button.disabled = true;
    const ansObj = questions[currentQuestionIndex].answers.find(a => a.text === button.textContent);
    if (ansObj.correct) {
      button.style.backgroundColor = "green";
    } else if (button.textContent === answer.text && !ansObj.correct) {
      button.style.backgroundColor = "red";
    }
  });
  nextButton.style.display = "block";


}

nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
});

function showScore() {
  questionElement.textContent = "";
  answerButtons.innerHTML = "";
  timerElement.textContent = "";
  nextButton.style.display = "none";
  scoreContainer.classList.remove("hide");
  scoreElement.textContent = `${score} / ${questions.length}`;
}

restartButton.addEventListener("click", startQuiz);

startQuiz();
