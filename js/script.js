let startButton = document.getElementById('start');
let viewscoreButton = document.getElementById('view high score');

var questions = [ {
    prompt: "Why so JavaScript and Java have similar name?\n\
    (a)JavaScript is a stripped-down version of Java\n(b)JavaScript's syntax is loosely based on Java's\n(c)They both originated on the island of Java\n(d)None of the above",
     answer: "b"
  },

    
  
  {
    prompt: " ______ JavaScript is also called client-side JavaScript.\n\(a)Microsoft\n(b)Navigator\n(c)LiveWire\n(d)Native",
    answer: "b"
      
      
    },
    
  {
    prompt: "Which of the following is not considered a JavaScript operator?\n\(a)new\n(b)this\n(c)delete\n(d)typeof",
    answer: "b"
  
      
    },

  {
  prompt: "Inside which HTML element do we put the JavaScript?\n\(a)<js>\n(b)<scripting>\n(c)<script>\n(d)<javascript>",
  answer: "c"


  },
 
  {
  prompt:"Which of the following attribute can hold the JavaScript version?\n\(a)LANGUAGE\n(b)SCRIPT\n(c)VERSION\n(d)None of the above",
  answer: "a"
  
  },
  var score = 0;

for(var i=0; i < questions. length; i++) { 
    var response = window.prompt (questions[i].prompt);
    if(response == questions [i].answer) {
        score++;
        alert("Correct!")
    } else {
        alert("WRONG!");

    }
    }
    alert("you got" + score + "/" + questions.length)


