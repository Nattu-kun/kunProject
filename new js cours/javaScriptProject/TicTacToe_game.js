// Access all box and reset button in js
let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let msgContainer = document.querySelector(".msg-container");
let newGameBtn= document.querySelector("#new-btn");
let msg = document.querySelector("#msg");

let turnO = true ;      // palyerX, palyerO //  if ture than true else false 

// 2D array : for wing patter store 
const winPatters = [
    [0,1,2],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

// Reset game 
const resetGame = () =>{
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}


// for all button we need to add eventlistner add to do some action .

boxes.forEach((box) => {
    box.addEventListener("click", () =>{
        console.log("box was clicked !");
        if(turnO){
            box.innerText = "O";
            turnO = false;
        }
        else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

// disable all box 
const disableBoxes = () =>{
    for(let box of boxes) {
        box.disabled = true;
    }
}

// newGame Enable all boxes 

const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

// show Winner 
const showWinner = (winner) =>{
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};


const checkWinner = () =>{
    for(let patter of winPatters) {
       let pos1Val = boxes[patter[0]].innerText;
       let pos2Val = boxes[patter[1]].innerText;
       let pos3Val = boxes[patter[2]].innerText;

       if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
        if(pos1Val == pos2Val && pos2Val == pos3Val){
            showWinner(pos1Val);
        }
       }
    }   
};

newGameBtn.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame); 