$(document).ready(function(){
    alert("Testing JQuery, don't mind this alert :p");
})

$(document).click(function(){
    var number = parseInt($(".counter").text())
    number++
    $(".counter").text(number)
})