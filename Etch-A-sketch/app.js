const container = document.querySelector(".container")
let range = document.querySelector("#range")
var val = 10
let colorSelecter = document.querySelector("#color")
let showGridSize = document.getElementById('textInput');
let color = "#000000"


// function getRandomColor() {
//     const r = Math.floor(Math.random() * 256)
//     const g = Math.floor(Math.random() * 256)
//     const b = Math.floor(Math.random() * 256)
//     return `rgb(${r}, ${g}, ${b})`
// }


colorSelecter.addEventListener("input", () => {
    color = colorSelecter.value;
})

val = prompt("enter grid value 5 - 64");

let rightPrompt = true;

function right() {
    if (val < 5) {
        rightPrompt = false
        val = prompt("grids should be more than 5")
    } else if (val > 64) {
        rightPrompt = false
        val = prompt("grids should be less than 64")
    } else if (isNaN(val)) {
        rightPrompt = false
        val = prompt("sirf number dal number, aayi smjh!!")
    } else {
        rightPrompt = true
    }
}
right()
while (rightPrompt === false) {
    right();
}

showGridSize.innerText = `: ${val} * ${val}`;

for (let i = 1; i <= val * val; i++) {
    container.style.gridTemplateColumns = `repeat(${val}, 1fr)`
    container.style.gridTemplateRows = `repeat(${val}, 1fr)`
    let div = document.createElement("div")
    container.appendChild(div);
    div.classList.add('box')
    div.style.width = 'container.style.width' / val + "px"
    div.style.height = 'container.style.height' / val + "px"
    div.onmouseenter = () => { div.style.background = color }
    

}

document.querySelector("#resize").addEventListener('click', () => {
    document.location.reload(true)
})