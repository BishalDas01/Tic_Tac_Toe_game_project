let allBox = document.querySelectorAll(".box");
let upperContainer = document.querySelector(".upper-container");
let newGame = document.querySelector(".newGame");
let resetBtn = document.querySelector(".r-btn");
let winMsg = document.querySelector(".winner");

const winningPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

let turnO = true;

allBox.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnO){
            box.innerText = "O";
            turnO = false;
        }
        else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        whoWinner();
    })
})

const showWinner = (winner) => {
    winMsg.innerText = `Congratulations, Winner is ${winner}`;
    upperContainer.classList.remove("hide");
}

const disableBoxes = () => {
    for(let box of allBox){
        box.disabled = true;
    }
}

const resetGame = () => {
    turnO = true;
    upperContainer.classList.add("hide");
    enableGame();
}

const enableGame = () => {
    for(let box of allBox){
        box.disabled = false;
        box.innerText = "";
    }
}

const whoWinner = () => {
    for(let pattern of winningPattern){
        console.log(pattern);
        console.log(allBox[pattern[0]], allBox[pattern[1]], allBox[pattern[2]]);
        let pos1val = allBox[pattern[0]].innerText;
        let pos2val = allBox[pattern[1]].innerText;
        let pos3val = allBox[pattern[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val){
                disableBoxes();
                showWinner(pos1val);
            }
        }
    }
}

resetBtn.addEventListener("click", resetGame);
newGame.addEventListener("click", resetGame);