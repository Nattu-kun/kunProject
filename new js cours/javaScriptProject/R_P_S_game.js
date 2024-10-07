let usersore = 0;
let computer = 0;

const choices = document.querySelectorAll(".choice");

const genCompChoice = () =>{
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random() *3);
        return options[randIdx];
}

const drawGame = () =>{
    console.log("game was Draw. !!!");
}

const showWinner = (userWin) =>{
    if(userWin){
        console.log("User Win");
    }else{
        console.log("Computer Win");
    }
};

const playGame = (choiceId) =>{
    console.log("user Choice = ",choiceId);
    // Generate computer choice : 
    const compChoice = genCompChoice();
    console.log("com Choice =",compChoice);

    if(choiceId === compChoice){
       drawGame();
    }

    else{
        let userWin = true;
        if(choiceId === "rock"){
            // paper , scissors 
            userWin = compChoice === "paper" ? false : true;
        }else if(choiceId === "paper"){
            // rock , scissors 
            userWin = compChoice === "scissors" ? false : true;
        }else{  // defalut scissors 
            userWin = compChoice === "rock" ? false : true;  

        }
        showWinner(userWin);
    }
}

choices.forEach((choice) =>{
    choice.addEventListener("click", () =>{
        let choiceId = choice.getAttribute("id");
        playGame(choiceId);
    })
});