const container = document.getElementById("container");

function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
      let cell = document.createElement("div");
      cell.setAttribute('id', `cell${c}`)
      container.appendChild(cell).className = "grid-item";
    };
};

makeRows(10, 10);
console.log(document.getElementsByClassName('grid-item').length)

console.log(document.getElementById('cell0'))
var x = document.querySelectorAll('.grid-item')
for (i=0; i < x.length; i++){
    document.getElementById(`cell${i}`).onmouseover = function(){
        var randomColor = Math.floor(Math.random()*16777215).toString(16);
        this.style.backgroundColor = randomColor
    }
}