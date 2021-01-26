function countdown() {
    var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
var firstDate = new Date();
var secondDate = new Date(2024,03,11);
var diffDays = Math.abs(firstDate - secondDate);
document.getElementById("days").innerHTML = Math.round(diffDays/oneDay) + " days";
}

window.onload(countdown());