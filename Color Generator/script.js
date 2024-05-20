let btn = document.querySelector(".change")
let input = document.querySelector("input")

function colorGenerator(){
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)

    return `rgb(${r},${g},${b})`
}


btn.addEventListener("click", ()=> {
    document.body.style.backgroundColor = colorGenerator()
    input.value = colorGenerator();
})

document.querySelector(".tooltip").addEventListener("click", ()=> {
    myFunction();
})
function myFunction() {
    var copyText = document.getElementById("myInput");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copied";
  }
  
  function outFunc() {
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copy to clipboard";
  }