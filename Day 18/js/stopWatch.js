function openTab(evt, watch){
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
      }
      tablinks = document.getElementsByClassName("tablinks");
      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
      }
      document.getElementById(watch).style.display = "block";
      evt.currentTarget.className += " active";
    }


//stopwatch
const stopWatch_time = document.getElementById("stopWatch_time");
var hr = 0;
var min = 0;
var sec = 0;
var stoptime = true;

function startStopWatch(){
    if(stoptime==true){
        stoptime=false;
        stopWatchCycle();
    }
}

function stopStopWatch(){
    if(stoptime==false){
        stoptime=true;
    }
}

function stopWatchCycle() {
    if (stoptime == false) {
    sec = parseInt(sec);
    min = parseInt(min);
    hr = parseInt(hr);

    sec = sec + 1;

    if (sec == 60) {
      min = min + 1;
      sec = 0;
    }
    if (min == 60) {
      hr = hr + 1;
      min = 0;
      sec = 0;
    }

    if (sec < 10 || sec == 0) {
      sec = '0' + sec;
    }
    if (min < 10 || min == 0) {
      min = '0' + min;
    }
    if (hr < 10 || hr == 0) {
      hr = '0' + hr;
    }

    stopWatch_time.innerHTML = hr + ':' + min + ':' + sec;

    setTimeout("timerCycle()", 1000);
  }
}

function resetStopWatch() {
    stopWatch_time.innerHTML = '00:00:00';
}


//timer
var stopTimer = true;
function startTimer(){
    if(stopTimer==true){
        stopTimer=false;
        startTimerCycle();
    }
}

function stopTimerb(){
    if(stopTimer==false){
        stopTimer=true;
        document.getElementById("timer_time").innerHTML = '00:00';
    }
}

function startTimerCycle() {
    var timermins = document.getElementById("mins").value
    var timersecs = document.getElementById("secs").value
    var duration = (timermins * 60) + timersecs;
    console.log(duration)
    var display = document.getElementById("timer_time")
    var start = Date.now(),
        diff,
        minutes,
        seconds;
    function timer() {
        var startVar;
        // get the number of seconds that have elapsed since 
        // startTimer() was called
        diff = duration - (((Date.now() - start) / 1000) | 0);

        // does the same job as parseInt truncates the float
        minutes = (diff / 60) | 0;
        seconds = (diff % 60) | 0;

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds; 

        if (diff <= 0) {
            // add one second so that the count down starts at the full duration
            // example 05:00 not 04:59
            start = Date.now() + 1000;
        }
    };
    // we don't want to wait a full second before the timer starts
    if(stopTimer == false){
    timer();
    startVar = setInterval(timer, 1000);
    }
    else{
        clearInterval(startVar)
    }
}