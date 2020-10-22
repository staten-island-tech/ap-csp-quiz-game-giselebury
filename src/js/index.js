import {DOMSelectors} from "./DOM";
import {quiz} from "./questions";





const init = function(){
    DOMSelectors.start.addEventListener("click", function(e){
        DOMSelectors.start.innerHTML = ""; 
            quiz.forEach((item) =>
            DOMSelectors.start.insertAdjacentHTML("beforeend",
            `<div class = "quiz">
            <li class = "quiz-question">${item.question}</li>
            <button class="answer-btn" id = "answer-1">${item.answers[0]}</button>
            <button class="answer-btn" id = "answer-2">${item.answers[1]}</button>
            <button class="answer-btn" id = "answer-3">${item.answers[2]}</button>
            <button class="answer-btn" id = "answer-4">${item.answers[3]}</button>
            </div>
            
             `
        
    ));
})
}       



const correctAnswer = function(){
    let answer = 0;
    document.addEventListener("click", function(e){
      if(e.target.id === "answer-1" ){
          answer = 0
      }  
    })
    document.addEventListener("click", function(e){
        if(e.target.id === "answer-2" ){
            answer = 1
        }  
      })
    
    document.addEventListener("click", function(e){
        if(e.target.id === "answer-3" ){
            answer = 2
        }  
      })
    
    document.addEventListener("click", function(e){
        if(e.target.id === "answer-4" ){
            answer = 3
        }  
      })
    
    
}

const checkAnswer = function(){
    correctAnswer()
    if(answer === quiz.correct){
        DOMSelectors.one.className = "btn-correct"
    } else {
        DOMSelectors.one.className = "btn-incorrect"
    }
    if(answer === quiz.correct){
        DOMSelectors.two.className = "btn-correct"
    } else {
        DOMSelectors.two.className = "btn-incorrect"
    }
    if(answer === quiz.correct){
        DOMSelectors.three.className = "btn-correct"
    } else {
        DOMSelectors.three.className = "btn-incorrect"
    }
    if(answer === quiz.correct){
        DOMSelectors.four.className = "btn-correct"
    } else {
        DOMSelectors.four.className = "btn-incorrect"
    }
}
    
    
 

init();
correctAnswer();
checkAnswer();