const quiz = [
    {
        question: "Which player has the most Super Bowl win?",
        //img: "/src/media/tom-brady.png",
        answers: ["Tom Brady","Eli Manning","Peyton Manning","Joe Namath"],
        correct: 0,
        number: "Tom Brady"
    },
    {
        question: "Which of the following team is currently in the World Series?",
        //img: "/src/media/messi.jpg",
        answers:[ "New York Yankees","Los Angeles Angels","Tampa Bay Rays","New York Mets"],
        correct: 2,
        number: "Tampa Bay Rays"
    },
    {
        question: "When is the last time the US Women National Team won the World Cup?",
        //img:"/src/media/stephen-curry.jpg",
        answers: ["2018","2019","2015", "2016"],
        correct: 1,
        number: "2019"
    },
    {
        question: "Which team won the NBA Finals this year?",
        //img: "/src/media/serena-williams.jpg",
        answers: ["Los Angeles Clippers", "Brooklyn Nets", "Los Angeles Lakers", "Miami Heat"],
        correct: 2,
        number: "Los Angeles Lakers"
    },
    {
        question: "Who won the US Open this year?",
        //img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FSimone_Biles&psig=AOvVaw3molkv_HC8ZRPabLPYvVt9&ust=1603426836352000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIjTiMqsx-wCFQAAAAAdAAAAABAD",
        answers: ["Venus Williams", "Serena Williams", "Victoria Azarenka", "Naomi Osaka"],
        correct: 3,
        number: "Naomi Osaka"
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