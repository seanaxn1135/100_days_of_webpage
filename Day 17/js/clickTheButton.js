function shiftButton() {
    document.getElementById("selfdestruct").style.top = `${Math.floor(Math.random() * 95)}vh`
    document.getElementById("selfdestruct").style.left = `${Math.floor(Math.random() * 90)}vw`
}

var timeleft = 1;
function selfdestruct(){
    document.getElementById("selfdestruct").style.display = 'none'
    document.getElementById("selfdestruct_text").style.display = 'block'

    setInterval(function(){
        document.getElementById("selfdestruct_text").innerHTML = `SELF DESTRUCTING IN ${10 - timeleft}...`
        timeleft += 1;
        if(timeleft >11){
            clearInterval(timeleft);
            window.close()
        }
    }, 1000)
}