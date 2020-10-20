import {DOMSelectors} from "./DOM";
import {quiz} from "./questions";

const init = function() {
    DOMSelectors.start.addEventListener("click", function(e){
        DOMSelectors.start.innerHTML = "";
        DOMSelectors.quiz.insertAdjacentElement("afterbegin",
        `<div class="quiz-score">
        <h2>Score</h2>
        <p>0</p>
    </div>`)
    });
}

init();

