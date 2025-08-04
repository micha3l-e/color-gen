let genBtn = document.getElementById("gen-btn");
let colorsEl = document.getElementById("colors-el");
let colorA = document.querySelector(".new-color-a");
let colorB = document.querySelector(".new-color-b");
let colorATxt = document.querySelector(".color-a-txt");
let colorBTxt = document.querySelector(".color-b-txt");
let allColorTxt = document.querySelectorAll(".color-a-txt, .color-b-txt");


function randomColor() {
    return "#" + Math.floor(Math.random() * 0xFFFFFF) .toString(16) .padStart(6, "0");
}

function genClick() {
    let c1 = randomColor();
    let c2 = randomColor();
    colorA.style.backgroundColor = c1;
    colorATxt.textContent = c1;
    colorB.style.backgroundColor = c2;
    colorBTxt.textContent = c2;
    colorA.style.border = "1px solid #edd9bb";
    colorB.style.border = "1px solid #edd9bb"

}

function colorClip(h) {
    const hex = h.currentTarget.textContent;
    const hexContainer = h.currentTarget;
    navigator.clipboard.writeText(hex);
    console.log(hex);
    hexContainer.setAttribute("data-tip", "Copied!")
    setTimeout(()=> hexContainer.setAttribute("data-tip", "Copy"), 900)
}

genBtn.addEventListener('click', genClick);
allColorTxt.forEach(el => el.addEventListener('click', colorClip));