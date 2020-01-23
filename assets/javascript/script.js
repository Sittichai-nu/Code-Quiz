var score = 0;
var currentQuestion = -1;
var timeLeft = 0;
var timer;

function start() {

timeLeft = 75;
document.getElementById("timeLeft").innerHTML = timeLeft;

timer = setInterval(function() {
    timeLeft--;
    document.getElementById("timeLeft").innerHTML = timeLeft;
    if (timeLeft <= 0) {
        clearInterval(timer);
        done(); 
    }
}, 1000);

next();
}

function done() {
clearInterval(timer);

var quizContent = `
<h2>All done!</h2>
<h3>Your final score is ` + score +  `.</h3>
Enter initial<input type="text" id="name" placeholder="Your initial here"> 
<button onclick="submit()">Submit!</button>`;

document.getElementById("quiz").innerHTML = quizContent;
}

function submit() {
localStorage.setItem("highscore", score);
localStorage.setItem("highscoreName",  document.getElementById('name').value);
getScore();
}


function getScore() {
var quizContent = `
<h2>` + localStorage.getItem("highscoreName") +  `: Your score is ` + localStorage.getItem("highscore") + `</h2><br> 

<button onclick="reset()">Go Back!</button><button onclick="clearScore()">Clear Highscores</button>

`;

document.getElementById("quiz").innerHTML = quizContent;
}

function clearScore() {
localStorage.setItem("highscore", "");
localStorage.setItem("highscoreName",  "");

reset();
}

function reset() {
clearInterval(timer);
score = 0;
currentQuestion = -1;
timeLeft = 0;
timer = null;

document.getElementById("timeLeft").innerHTML = timeLeft;

var quizContent = `
<h1>Coding Quiz Challenge</h1>
<h3>Welcome to JavaScript Quiz   </h3>
<button onclick="start()">Start!</button>`;

document.getElementById("quiz").innerHTML = quizContent;
}

function incorrect() {
timeLeft -= 15; 

next();
}

function correct() {
score += 20;
next();
}

function next() {
currentQuestion++;

if (currentQuestion > questions.length - 1) {
    done();
    return;
}

var quizContent = "<h2>" + questions[currentQuestion].title + "</h2>"

for (var buttonLoop = 0; buttonLoop < questions[currentQuestion].choices.length; buttonLoop++) {
    var buttonCode = "<button onclick=\"[answer]\">[choices]</button>"; 
    buttonCode = buttonCode.replace("[choices]", questions[currentQuestion].choices[buttonLoop]);
    if (questions[currentQuestion].choices[buttonLoop] == questions[currentQuestion].answer) {
        buttonCode = buttonCode.replace("[answer]", "correct()");
    } else {
        buttonCode = buttonCode.replace("[answer]", "incorrect()");
    }
    quizContent += buttonCode
}


document.getElementById("quiz").innerHTML = quizContent;
}