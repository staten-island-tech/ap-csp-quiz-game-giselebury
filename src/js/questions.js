const quiz = [
    {
        question: "Who is this player?",
        img: "/src/media/tom-brady.png",
        answers: ["Tom Brady","Eli Manning","Peyton Manning","Zach Ertz"],
        correct: 0,
        number: "Tom Brady"
    },
    {
        question: "Who is this player?",
        img: "/src/media/messi.jpg",
        answers:[ "Christiano Ronaldo","Luis Suarez","Lionel Messi","Neymar"],
        correct: 2,
        number: "Lionel Messi"
    },
    {
        question: "Who is this player?",
        img:"/src/media/stephen-curry.jpg",
        answers: ["Lebron James","Stephen Curry","Kevin Durant", "Michael Jordan"],
        correct: 1,
        number: "Stephen Curry"
    },
    {
        question: "Who is this player?",
        img: "/src/media/serena-williams.jpg",
        answers: ["Venus Williams", "Maria Sharapova", "Serena Williams", "Naomi Osaka"],
        correct: 2,
        number: "Serena Williams"
    },
    {
        question: "Who is this player?",
        img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FSimone_Biles&psig=AOvVaw3molkv_HC8ZRPabLPYvVt9&ust=1603426836352000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIjTiMqsx-wCFQAAAAAdAAAAABAD",
        answers: ["Gabby Douglas", "Shannon Miller", "McKayla Maroney", "Simone Biles"],
        correct: 3,
        number: "Simone Biles"
    },
    /* {
        question: "Who is this player?",
        img: "",
        answers: ["Rob Gronkowski","Travis Kelce","Geroge Kittle","Mark Andrews"],
        correct: 2,
        number: 6
    },
    {
        question: "Who is this player?",
        img: "",
        answers: ["Alex Morgan","Rose Lavelle","Megan Rapinoe","Carli Llyod"],
        correct: 1,
        number: 7
    },
    {
        question: "Who is this player?",
        img: "",
        answers: ["Giancarlo Stanton","Cody Bellinger","Mookie Betts","Randy Arozarena"],
        correct: 3,
        number: 8
    },
    {
        question: "Who is this player?",
        img: "",
        answers: ["Dustin Johnson","Tiger Woods","Phil Mickelson","Justin Thomas"],
        correct: 0,
        number: 9
    },
    {
        question: "Who is this player?",
        img: "",
        answers: ["Kobe Bryant","Black Mamba","Gigi Bryant","8&24"],
        correct: 0,
        number:10
    } */,

];

/* const score = 0;
for(const i=0; i< quiz.length; i++){
    const response = window.prompt(quiz[i].prompt);
    if(response == quiz[i].correct){
        score++;
        alert("Correct!");
    } else {
        alert("Incorrect!");
    }
}
alert("you got" + score + "/"+ quiz.length) */
export {quiz};