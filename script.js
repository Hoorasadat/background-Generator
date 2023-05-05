var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
// var input = document.querySelectorAll("input");
var body = document.querySelector("body");
var h3 = document.querySelector("h3");
var btn = document.querySelector("button");

color1.addEventListener("input", changeColor);
color2.addEventListener("input", changeColor);

btn.addEventListener("click", randomColor);

function changeColor() {
    body.style.background = "linear-gradient(to right, " + color1.value + "," + color2.value + ")";
    h3.textContent = body.style.background + ";";
}

function randomColor() {
    color1.value = createRGB();
    color2.value = createRGB();
    changeColor();
}

function createRGB(){
    var rd = Math.floor(Math.random() * 256);
    var grn = Math.floor(Math.random() * 256);
    var blu = Math.floor(Math.random() * 256);
    return "#" + componentToHex(rd) + componentToHex(grn) + componentToHex(blu);
}

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}
