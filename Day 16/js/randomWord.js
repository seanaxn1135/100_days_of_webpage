async function getWord(){
    const response = await fetch("https://random-word-api.herokuapp.com/all")
    const data = await response.json()
    console.log(data.length)
    const numberOfWords = data.length
    var randomNum = Math.random();
    console.log(randomNum)
    document.getElementById("word").innerHTML = data[Math.floor(randomNum * data.length)];
}

document.onload = getWord();