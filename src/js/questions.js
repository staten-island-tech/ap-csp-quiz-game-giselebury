const quiz = [
    {
        question: "Who is this player?",
        img: "/src/media/tom-brady.jpg",
        answers: ["Tom Brady","Eli Manning","Peyton Manning","Zach Ertz"],
        correct: 0
    },
    {
        question: "Who is this player?",
        img: "/src/media/messi.jpg",
        answers:[ "Christiano Ronaldo","Luis Suarez","Lionel Messi","Neymar"],
        correct: 2
    },
    {
        question: "Who is this player?",
        img:"/src/media/stephen-curry.jpg",
        answers: ["Lebron James","Stephen Curry","Kevin Durant", "Michael Jordan"],
        correct: 1
    },
    {
        question: "Who is this player?",
        img: "/src/media/serena-williams.jpg",
        answers: ["Venus Williams", "Maria Sharapova", "Serena Williams", "Naomi Osaka"],
        correct: 2
    },
    {
        question: "Who is this player?",
        img: "/src/media/simone-biles.jpg",
        answers: ["Gabby Douglas", "Shannon Miller", "McKayla Maroney", "Simone Biles"],
        correct: 3
    },
    {
        question: "Who is this player?",
        img: "",
        answers: ["Rob Gronkowski","Travis Kelce","Geroge Kittle","Mark Andrews"],
        correct: 2
    },
    {
        question: "Who is this player?",
        img: "",
        answers: ["Alex Morgan","Rose Lavelle","Megan Rapinoe","Carli Llyod"],
        correct: 1
    },
    {
        question: "Who is this player?",
        img: "",
        answers: ["Giancarlo Stanton","Cody Bellinger","Mookie Betts","Randy Arozarena"],
        correct: 3
    },
    {
        question: "Who is this player?",
        img: "",
        answers: ["Dustin Johnson","Tiger Woods","Phil Mickelson","Justin Thomas"],
        correct: 0
    },
    {
        question: "Who is this player?",
        img: "",
        answers: ["Kobe Bryant","Black Mamba","Gigi Bryant","8&24"],
        correct: 0
    },

];

const score = 0;
for(const i=0; i< quiz.length; i++){
    const response = window.prompt(quiz[i].prompt);
    if(response == quiz[i].correct){
        score++;
        alert("Correct!");
    } else {
        alert("Incorrect!");
    }
}
alert("you got" + score + "/"+ quiz.length)
export {quiz};