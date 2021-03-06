import {DOMSelectors} from "./DOM";
import {quiz} from "./questions";

//let numberCorrect = 0;

const init = function () {
    let started = false;

    function loadHtml(){
        DOMSelectors.start.innerHTML = "";
        quiz.forEach((item) =>
        DOMSelectors.start.insertAdjacentHTML("beforeend",
        `<div class = "quiz" id = ${item.number}>
        <li class = "quiz-question">${item.question}</li>
        <button class="answer-btn" id = "answer-1">${item.answers[0]}</button>
        <button class="answer-btn" id = "answer-2">${item.answers[1]}</button>
        <button class="answer-btn" id = "answer-3">${item.answers[2]}</button>            
        <button class="answer-btn" id = "answer-4">${item.answers[3]}</button>
        </div>
        `
        ));

        document.querySelectorAll(".answer-btn").forEach((btn) => {
            btn.addEventListener("click", (e) => {
                const quizContainer = e.target.parentElement;
                const btn = e.target;
                checkAnswer(quizContainer,btn);
            })
        })
        DOMSelectors.start.removeEventListener("click", loadHtml);
    };

    DOMSelectors.start.addEventListener("click", loadHtml);
}

const correctAnswer = function(id) {
    let answer = 0;
    switch (id) {
        case "answer-1":
            answer = 0;
            break;
        case "answer-2":
            answer = 1;
            break;
        case "answer-3":
            answer = 2;
            break;
        case "answer-4":
            answer = 3;
            break;  
    }
    return answer
}


var numberCorrect = 0;


function checkAnswer(quizContainer, btn){
    console.log(quizContainer);
    const answer = correctAnswer(btn.id);
    const questionindex = quizContainer.id - 1;

    if (answer === quiz[questionindex].correct) {
        console.log('yes');
        btn.classList.add("btn-correct");
        // function numberCorrect() {
        //     var numberCorrect = document.getElementById('quiz-score').innerHTML;
        //     numberCorrect++;
        //     document.getElementById('quiz-score').innerHTML = numberCorrect;
        // }
        numberCorrect = numberCorrect + 1;
        //numberCorrect++
        //score.text ="Score: " + checkAnswer.numberCorrect;
        //score.update();
    } else {
        console.log('no');
        btn.classList.add("btn-incorrect");
    }
    console.log(numberCorrect);
    
    DOMSelectors.score.innerHTML = "";
    DOMSelectors.score.insertAdjacentHTML("beforeend",
    `<p>${numberCorrect}/5</p>`)
         
    
}






init();
