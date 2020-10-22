import {DOMSelectors} from "./DOM";
import {quiz} from "./questions";

const init = function () {
    let started = false;

    function loadHtml(){
        DOMSelectors.start.innerHTML = "";
        quiz.forEach((item) =>
        DOMSelectors.start.insertAdjacentElement("beforeend",
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
        //DOMSelectors.start.removeEventListener("click", loadHtml);
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

function checkAnswer(quizContainer, btn){
    console.log(quizContainer);
    const answer = correctAnswer(btn.id);
    const questionindex = quizContainer.id - 1;

    if (answer === quiz[questionindex].correct) {
        console.log('yes');
        btn.classList.add("btn-correct");
    } else {
        console.log('no');
        btn.classList.add("btn-incorrect");
    }
}




init();
loadHtml();
correctAnswer();
checkAnswer(); 