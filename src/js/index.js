import {DOMSelectors} from "./DOM";
import {quiz} from "./questions";

const start = function() {
    DOMSelectors.start.addEventListener("click", function(e){
        
        
    });
}


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

init();
