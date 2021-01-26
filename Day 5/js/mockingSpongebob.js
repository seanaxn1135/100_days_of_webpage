function mockify() {
    document.getElementById('mockingscript').innerHTML = "";
    var userInput = document.getElementById('input').value;
    for(let i=0; i<userInput.length; i++){
        if(i%2 ==0){
            document.getElementById('mockingscript').innerHTML += userInput.charAt(i).toUpperCase()
        }
        else{
            document.getElementById('mockingscript').innerHTML += userInput.charAt(i);
        }
    }
}