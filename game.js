let userScore = 0;
let compScore = 0;


const choices = document.querySelectorAll(".choice");
const body = document.querySelector("body");
const msg = document.querySelector("#msg");
const userScoreVal = document.querySelector("#user-score");
const compScoreVal = document.querySelector("#comp-score");


const genCompChoice = () => {
    let options = ["rock", "paper", "scissors"];
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
}


const playGame = (userChoice) => {
    const compChoice = genCompChoice();

    if(userChoice === compChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;
        }else{
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};


choices.forEach((choice) => {
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});


const drawGame = () => {
    msg.innerText = `Game was Draw. Play again.`
    msg.style.backgroundColor = "#081b31";
    body.style.backgroundColor = "white";
}


const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScoreVal.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats computer's ${compChoice}`;
        msg.style.backgroundColor = "green";
        body.style.backgroundColor = "#72eb72";
    }else{
        compScore++;
        compScoreVal.innerText = compScore;
        msg.innerText = `You lost.. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
        body.style.backgroundColor = "#ea7272";
    }
}