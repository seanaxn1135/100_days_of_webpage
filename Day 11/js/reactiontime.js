/* 
when button is clicked:
hide button
wait at least 3 seconds for circle to turn green
when turn green start timer
when click stop timer
unhide start button
change html text result */

function start_game(){
    document.getElementById("results").style.display="none";
    document.getElementById("circle").style.backgroundColor="red";
    var clickedTime; var createdTime; var reactionTime;
    document.getElementById('startbutton').style.display = 'none';
    var time = Math.random();
    time = 3000 + time * 7000; //3-10 seconds
    setTimeout(function (){ 
        document.getElementById("circle").style.backgroundColor="green";
        createdTime = Date.now();
    }, time);
    document.getElementById("circle").onclick=function(){
        clickedTime = Date.now();
        reactionTime=(clickedTime-createdTime)/1000;
        document.getElementById("results").style.display="block";
        document.getElementById("results").innerHTML = `Your Reaction Time is: ${reactionTime} seconds`;
        document.getElementById('startbutton').style.display = 'block';
    }
}