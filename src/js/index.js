import {DOMSelectors} from "./DOM";
import {quiz} from "./questions";





const init = function(){
    DOMSelectors.start.addEventListener("click", function(e){
        DOMSelectors.start.innerHTML = ""; 
            quiz.forEach((item) =>
            DOMSelectors.start.insertAdjacentHTML("beforeend",
            `<div class = "quiz">
            <li class = "quiz-question">${item.question}</li>
            <li class = "quiz-question"><img src="${item.img}" class = "quiz-img" alt=""></li>
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
}
    
    
 

init();
correctAnswer();