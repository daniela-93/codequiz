let startButton = document.getElementById('startQuiz');
let scoreButton = document.getElementById('view high score');

///questions//
var x = document.getElementById("startQuiz");
x.addEventListener("click", promptQuiz);
x.addEventListener("click", startTimer);

function startTimer(){
  var myVar = setInterval(myTimer, 1000)


}
function promptQuiz() {


//view score//
  

  var score = 0;

for(var i=0; i < questions. length; i++) { 
    var response = prompt (questions[i].prompt);
    if(response == questions [i].answer) {
        score++;
        alert("Correct!")
    } else {
        alert("WRONG!");

    }
    }
  alert("All done! Your final score is " + score + "/" + questions.length)


  }