function addSnail() {
    var img = document.createElement("img");
    img.src = "images/PinClipart.com_cake-walk-clipart_5513060.png"
    img.width = 70;
    img.height = "auto";
    var class_name = "snail";
    img.setAttribute("class", class_name);
    document.body.appendChild(img);
}

document.addEventListener('click', e => {
    addSnail();
})

var snail = document.querySelector('.snail');
document.addEventListener('mousemove', e => {
    snail.setAttribute("style", `top: ${e.pageY-25}px; left: ${e.pageX-35}px;`)
})