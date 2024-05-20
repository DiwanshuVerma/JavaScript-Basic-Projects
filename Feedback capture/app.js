const ratings = document.querySelectorAll(".btn");
const sendFeedback = document.querySelector(".send_feedback");
const box = document.querySelector(".box");

let clickChecker = false;
let captureName = ""

ratings.forEach(rating => {
    rating.addEventListener("click", ()=> {
       captureName = rating.name
       clickChecker = true;
       rating.classList.toggle("active");
    })
})

sendFeedback.addEventListener("click", ()=>{ 
    feedbackScreen()
})

function feedbackScreen(){
    if(clickChecker){
    box.innerHTML = 
    `
    <p class="js-text">💖</p>
    <p class="js-text">Thank You</p>
    <p class="js-text">Feedback: ${captureName}</p>
    `
    }
    else {
        alert("Pehle Rating To Choose Kar 🤬")
    }
}