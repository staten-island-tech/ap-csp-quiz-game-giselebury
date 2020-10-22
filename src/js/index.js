import {DOMSelectors} from "./DOM";
import {quiz} from "./questions";

/* const start = function() {
    DOMSelectors.start.addEventListener("click", function(e){
        
        
    });
} */


const displayQuestion = function(){
    DOMSelectors.start.addEventListener("click", function(e){
       DOMSelectors.start.innerHTML = ""; 
        quiz.forEach((item) =>
        DOMSelectors.start.insertAdjacentHTML("beforeend",
        `<li class = "quiz-question">${item.question}</li>
        <li class = "quiz-img quiz-question"><img src="${item.img}" class = "quiz-img" alt=""></li>
        <label class="container">${item.answers[0]}
                <input type="radio" checked = "checked" name = "radio" value = "${item.answers[0]}">
                <span class="checkmark"></span>
            </label>   
            <label class="container">${item.answers[1]}
                <input type="radio" checked = "checked" name = "radio" value = "${item.answers[1]}">
                <span class="checkmark"></span>
            </label>   
            <label class="container">${item.answers[2]}
                <input type="radio" checked = "checked" name = "radio" value = "${item.answers[2]}">
                <span class="checkmark"></span>
            </label>   
            <label class="container">${item.answers[3]}
                <input type="radio" checked = "checked" name = "radio" value = "${item.answers[3]}">
                <span class="checkmark"></span>
            </label>   
         `

        ));
    })
    
        
    
}




displayQuestion();
