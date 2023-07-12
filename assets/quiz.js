var timerElement = document.querySelector(".timer");
var scores = document.querySelector(".scores");
var startButton = document.querySelector(".start-button");
var questionElement = document.querySelector(".question");
var questionContainer = document.querySelector("#question-container");
var answerContainer = document.querySelector(".answers");
var correct = document.querySelector(".correct");
var incorrect = document.querySelector(".incorrect");
var startScreen = document.querySelector("#start-screen");
var choice1 = document.querySelector(".choice-1")
var choice2 = document.querySelector(".choice-2")
var choice3 = document.querySelector(".choice-3")
var choice4 = document.querySelector(".choice-4")


var currentQuestionIndex =0;
var correct = true;
var timer;
var timerCount;
var questions;
var score;
//create array for questions and answers
var questions = [
  {
   question: "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
    answers: ["if i <> 5","if i =! 5 then","if (i <> 5)","if (i != 5)"],
    correct: "if (i != 5)"
  },
  {
    question: "How does a FOR loop start?",
    answers: ["for (i = 0; i <= 5; i++)", "for (i = 0; i <= 5)", "for i = 1 to 5", "for (i <= 5; i++)"],
    correct: "for (i = 0; i <= 5; i++)"
  },
  {
    question: "Which event occurs when the user clicks on an HTML element?",
    answers: ["onmouseclick", "onmouseover", "onclick", "onchange"], 
    correct: "onclick"
  },
  {
    question: "How can you add a comment in a JavaScript?",
    answers: ["<!--This is a comment-->", "//This is a comment", "'This is a comment", "* This is a comment*"],
    correct: "//This is a comment"
  },
  {
    question: "Which of the following type of variable is visible only within a function where it is defined?",
    answers: ["Global Variable", "Local Variable", "Both of the above", "none of the above"],
    correct: "Local Variable",
  }
]

//start quiz with timer set at 60sec, subtraccting 10sec for incorrect answer
function startQuiz() {
  startScreen.setAttribute("class","hidden");
  questionContainer.removeAttribute("class")
    timerCount = 60;
    timer = setInterval(function() {
      timerCount--;

      if (timerCount < 0){
        timerCount = 0;
      }

      timerElement.textContent = "Time: " + timerCount;
  
      // check if timer count reaches 0
      if (timerCount <= 0) {
        clearInterval(timer);
        
      }
    }, 1000);
    getQuestion();
  }

//create function for questions and onclick event to next question when answer choosen.
  function getQuestion() {
    console.log(currentQuestionIndex)
   var currentQuestion = questions[currentQuestionIndex]
    questionElement.textContent = currentQuestion.question;
    
    answers.innerHTML = "";
    //add onclick event to next question 
    for (var i = 0; i < currentQuestion.answers.length; i++){
      var choiceText = currentQuestion.answers[i];
      var choiceBtn = document.createElement("button");
      choiceBtn.setAttribute("class","choice");
      choiceBtn.setAttribute("value", choiceText);
      choiceBtn.textContent = choiceText;
      answerContainer.appendChild(choiceBtn)
    }
  }

  function showNextQuestion() {
    var questionElement = document.getElementsByClassName("question");
    questionElement.innerHTML = questions[currentQuestionIndex].question;
    currentQuestionIndex++;
    if (currentQuestionIndex >= questions.length) {
      // clear the current question index
      currentQuestionIndex = 0;
    }
    }

    //add green background on button when correcct, red when incorrect.
function checkAnswer(event) {
  var buttonEl = event.target;

  if (!buttonEl.matches(".choice")){
    return;
  }

  if (buttonEl.value !== questions[currentQuestionIndex].correct){
    timerCount -= 10;
    //choiceBtn.setAttribute("style", "background-color: red;");
    //chooiceBtn.setAttribute(".incorrect");
    incorrect.textContent = "Incorrect!";
    footer.removeAttribute("class", "hidden")
  }
  
  currentQuestionIndex++;
  if (timerCount <= 0 || currentQuestionIndex=== questions.length){
    endQuiz();
  }
  else {
    getQuestion();
  }
}
//get score from timer--------------------------------
function getScore(){

  var score = timerCount;
}
/*renderLastRegistered(timerCount); {

}*/

function endQuiz(){
  clearInterval(timer);
  localStorage.setItem("studentScore", JSON.stringify(timerCount));
  //create highscore page to enter intials and show score----------------
}
  
    
    startButton.addEventListener("click", startQuiz);

    answerContainer.addEventListener("click", checkAnswer);