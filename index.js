let genBtn = document.getElementById("gen-btn");
let colorsEl = document.getElementById("colors-el");
let colorA = document.querySelector(".new-color-a")
let colorB = document.querySelector(".new-color-b")


function randomColor() {
    return "#" + Math.floor(Math.random() * 0xFFFFFF) .toString(16) .padStart(6, "0");
}

function genClick() {
    let c1 = randomColor();
    let c2 = randomColor();
    colorA.style.backgroundColor = c1;
    colorA.textContent = c1;
    colorB.style.backgroundColor = c2;
    colorB.textContent = c2;



}

genBtn.addEventListener('click', genClick);
