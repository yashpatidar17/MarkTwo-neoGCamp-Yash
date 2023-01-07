var readlineSync = require('readline-sync');
var FanBoyName = readlineSync.question("What is your name Fan Boy?")
console.log("Welcome " + FanBoyName + " To the Marvel Quiz");
console.log("--------------------------------------------------");
var highScore = 5;
var score = 0;
function MarvelFanQuiz(question, answer) {
  var FanBoyAnswer = readlineSync.question(question);

  if (FanBoyAnswer.toUpperCase() == answer.toUpperCase()) {
    console.log("You are right!");
    score++;
    console.log("Your Score is", score);
    console.log("--------------------------------");
  } else {
    console.log("You are wrong!");
    console.log("You need to watch marvel movies again");
    console.log("--------------------------------");
  }
}

var questions = [
  {
    question: "How many Infinity Stones are there?",
    answer: "six"
  },
  {
    question: "Where is Captain America from?",
    answer: "brooklyn"
  },
  {
    question: "Captain Americas shield and Bucky's arm are made of what?",
    answer: "vibranium"
  },
  {
    question: "Who is Tony Starks father?",
    answer: "howard stark"
  },
  {
    question: "Which movie kicked off the Marvel Cinematic Universe?",
    answer: "iron man"
  }
]

for (var i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];
  MarvelFanQuiz(currentQuestion.question, currentQuestion.answer);
}

function highScores(num) {
  if (score == highScore) {
    console.log("yeah, you are a true marvel fan")
  } else if (score == (highScore - 1)) {
    console.log("You need to watch marvel movies")
  } else {
    console.log("Go watch marvel movie first you DC fanboy")
  }
}

highScores(score);