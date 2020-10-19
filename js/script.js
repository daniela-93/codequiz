function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {
    var oneMinute = 60 ,
        display = document.querySelector('#time');
    startTimer(oneMinute, display);
};
var c = 0;
function myCounter() {
  document.getElementById("myTimer").innerHTML = ++c;
}