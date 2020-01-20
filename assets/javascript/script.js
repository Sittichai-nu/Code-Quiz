// Select Elements

var startEl = document.getElementById("start-btn");
var choices = document.getElementById("choices");
var a = document.getElementById("a");
var b = document.getElementById("b");
var c = document.getElementById("c");
var d = document.getElementById("d");
var counter = document.getElementById("counter");
var timeGauge = document.getElementById("timeGauge");
var scoreDiv = document.getElementById("myScore");

let nextQuestion = 0


startEl.addEventListener("click", startQuiz)


 function startQuiz() {
     startEl.style.display = "none"
     startEl.style.textAlign = "center"
     setQuestion();

 };

 function setQuestion() {
    var q = questions[nextQuestion];
    choices.innerHTML="<p>"+ q.question +"</p>";
    a.innerHTML = q.a;
    b.innerHTML = q.b;
    c.innerHTML = q.c;
    d.innerHTML = q.d;
 };

 function checkAnswer(answer){
    if( answer == questions[nextQuestion].correct){
        score++;
        answerIsCorrect();
    }else{
        answerIsWrong();
    }
 }
 function answerIsCorrect(){

}
function answerIsWrong(){
    
}
function scoreRender(){
    scoreDiv.style.display = "block";
    const scorePerCent = Math.round(100 * score/questions.length);
    scoreDiv.innerHTML += "<p>"+ scorePerCent +"%</p>";
}
