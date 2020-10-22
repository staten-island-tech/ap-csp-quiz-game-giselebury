// import {DOMSelectors} from "./DOM";
// import {quiz} from "./questions";

// const start = function() {
//     DOMSelectors.start.addEventListener("click", function(e){
        
        
//     });
// }


// const init = function(){
//     DOMSelectors.start.addEventListener("click", function(e){
//        DOMSelectors.start.innerHTML = ""; 
//         quiz.forEach((item) =>
//         DOMSelectors.start.insertAdjacentHTML("beforeend",
//         `<li>${item.question}</li>
//         <li class = "quiz-img"><img src="${item.img}" alt=""></li>
//         <button class="answer-btn">${item.answers[0]}</button>
//         <button class="answer-btn">${item.answers[1]}</button>
//         <button class="answer-btn">${item.answers[2]}</button>
//         <button class="answer-btn">${item.answers[3]}</button>
//          `

//         ));
//     })
    
        
    
// }

// init();

const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'Who is this player?',
    img: "/src/media/tom-brady.jpg",
    answers: [
      { text: 'Tom Brady', correct: true },
      { text: 'Eli Manning', correct: false },
      { text: 'Peyton Manning', correct: false },
      { text: 'Zach Ertz', correct: false }
    ]
  },
  {
    question: 'Who is this player?',
    answers: [
      { text: 'Christiano Ronaldo', correct: false },
      { text: 'Luis Suarez', correct: false },
      { text: 'Lionel Messi', correct: true },
      { text: 'Neymar', correct: false }
    ]
  },
  {
    question: 'Who is this player?',
    answers: [
      { text: 'Lebron James', correct: false },
      { text: 'Stephen Curry', correct: true },
      { text: 'Kevin Durant', correct: false },
      { text: 'Michael Jordan', correct: false }
    ]
  },
  {
    question: 'Who is this player?',
    answers: [
      { text: 'Venus Williams', correct: false },
      { text: 'Maria Sharapova', correct: true },
      { text: 'Serena Williams', correct: false },
      { text: 'Naomi Osaka', correct: false }
    ]
  },
  {
    question: 'Who is this player?',
    answers: [
      { text: 'Gabby Douglas', correct: false },
      { text: 'Shannon Miller', correct: false },
      { text: 'McKayla Maroney', correct: false },
      { text: 'Simone Biles', correct: true }
    ]
  },
  {
    question: 'Who is this player?',
    answers: [
      { text: 'Rob Gronkowski', correct: false },
      { text: 'Travis Kelce', correct: false },
      { text: 'Geroge Kittle', correct: true },
      { text: 'Mark Andrews', correct: false }
    ]
  },
  {
    question: 'Who is this player?',
    answers: [
      { text: 'Alex Morgan', correct: false },
      { text: 'Rose Lavelle', correct: true },
      { text: 'Megan Rapinoe', correct: false },
      { text: 'Carli Llyod', correct: false }
    ]
  },
  {
    question: 'Who is this player?',
    answers: [
      { text: 'Giancarlo Stanton', correct: false },
      { text: 'Cody Bellinger', correct: false },
      { text: 'Mookie Betts', correct: false },
      { text: 'Randy Arozarena', correct: true }
    ]
  },
  {
    question: 'Who is this player?',
    answers: [
      { text: 'Dustin Johnson', correct: true },
      { text: 'Tiger Woods', correct: false },
      { text: 'Phil Mickelson', correct: false },
      { text: 'Justin Thomas', correct: false }
    ]
  },
  {
    question: 'Who is this player?',
    answers: [
      { text: 'Kobe Bryant', correct: true },
      { text: '"Gigi Bryant', correct: true },
    ]
  }
]