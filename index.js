const genBtn = document.getElementById("gen-btn");
const colorsEl = document.getElementById("colors-el");
const colorA = document.querySelector(".new-color-a");
const colorB = document.querySelector(".new-color-b");
const colorATxt = document.querySelector(".color-a-txt");
const colorBTxt = document.querySelector(".color-b-txt");
const allColorTxt = document.querySelectorAll(".color-a-txt, .color-b-txt");


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