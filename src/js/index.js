import {DOMSelectors} from "./DOM";
import {quiz} from "./questions";

/* const start = function() {
    DOMSelectors.start.addEventListener("click", function(e){
        DOMSelectors.start.innerHTML = "";
        DOMSelectors.quiz.insertAdjacentElement("afterbegin",
        `<div class="quiz-score">
        <h2>Score</h2>
        <p>0</p>
    </div>`)
    });
} */



const init = function(){
    DOMSelectors.start.addEventListener("click", function(e){
        DOMSelectors.start.innerHTML = ""; 
            quiz.forEach((item) =>
            DOMSelectors.start.insertAdjacentHTML("beforeend",
            `<li>${item.question}</li>
            <li class = "quiz-img"><img src="${item.img}" alt=""></li>
            <button class="answer-btn">${item.answers[0]}</button>
            <button class="answer-btn">${item.answers[1]}</button>
            <button class="answer-btn">${item.answers[2]}</button>
            <button class="answer-btn">${item.answers[3]}</button>
             `
        
    ));
})
}       