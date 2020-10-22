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
    question: 'Which player has the most Super Bowl win?',
    //img: "/src/media/tom-brady.jpg",
    answers: [
      { text: 'Tom Brady', correct: true },
      { text: 'Eli Manning', correct: false },
      { text: 'Peyton Manning', correct: false },
      { text: 'Joe Namath', correct: false }
    ]
  },
  {
    question: 'Which of the following team is currently in the World Series?',
    answers: [
      { text: 'New York Yankees', correct: false },
      { text: 'Los Angeles Angels', correct: false },
      { text: 'Tampa Bay Rays', correct: true },
      { text: 'New York Mets', correct: false }
    ]
  },
  {
    question: 'When is the last time the US Women National Team won the World Cup?',
    answers: [
      { text: '2018', correct: false },
      { text: '2019', correct: true },
      { text: '2015', correct: false },
      { text: '2016', correct: false }
    ]
  },
  {
    question: 'Which team won the NBA Finals this year?',
    answers: [
      { text: 'Los Angeles Clippers', correct: false },
      { text: 'Brooklyn Nets', correct: false },
      { text: 'Los Angeles Lakers', correct: true },
      { text: 'Miami Heat', correct: false }
    ]
  },
  {
    question: 'Who won the US Open this year?',
    answers: [
      { text: 'Venus Williams', correct: false },
      { text: 'Serena Williams', correct: false },
      { text: 'Victoria Azarenka', correct: false },
      { text: 'Naomi Osaka', correct: true }
    ]
  }
  // {
  //   question: 'Who is this player?',
  //   answers: [
  //     { text: 'Rob Gronkowski', correct: false },
  //     { text: 'Travis Kelce', correct: false },
  //     { text: 'Geroge Kittle', correct: true },
  //     { text: 'Mark Andrews', correct: false }
  //   ]
  // },
  // {
  //   question: 'Who is this player?',
  //   answers: [
  //     { text: 'Alex Morgan', correct: false },
  //     { text: 'Rose Lavelle', correct: true },
  //     { text: 'Megan Rapinoe', correct: false },
  //     { text: 'Carli Llyod', correct: false }
  //   ]
  // },
  // {
  //   question: 'Who is this player?',
  //   answers: [
  //     { text: 'Giancarlo Stanton', correct: false },
  //     { text: 'Cody Bellinger', correct: false },
  //     { text: 'Mookie Betts', correct: false },
  //     { text: 'Randy Arozarena', correct: true }
  //   ]
  // },
  // {
  //   question: 'Who is this player?',
  //   answers: [
  //     { text: 'Dustin Johnson', correct: true },
  //     { text: 'Tiger Woods', correct: false },
  //     { text: 'Phil Mickelson', correct: false },
  //     { text: 'Justin Thomas', correct: false }
  //   ]
  // },
  // {
  //   question: 'Who is this player?',
  //   answers: [
  //     { text: 'Kobe Bryant', correct: true },
  //     { text: '"Gigi Bryant', correct: true },
  //   ]
  // }
]