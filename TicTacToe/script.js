let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset-btn");
let head = document.querySelector("h1");

let turn0 = true; //toggle (X or O)
let count = 0; //for draw condition

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame = () =>{
    turn0 = true;
    boxes.forEach((box)=>{
        box.innerText = "";
    });
    head.innerText = "Tic Tac Toe";
    enableBoxes();
};

reset.addEventListener("click",resetGame);

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn0){
            box.innerText = "X";
            turn0=false;
        }
        else{
            box.innerText = "O";
            turn0=true;
        }
        box.disabled = true;
        checkWinner();
        count++;
        if(count===9){
            head.innerText = "It's a draw";
            setTimeout(()=>{
                resetGame()
            },3000);
        }
    });
});
const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}
const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
    }
}
const showWinner = (winner,a,b,c) => {
    head.innerText = `Congratulations ${winner} wins` ;
    boxes[a].innerHTML = `<button class="box" style="font-size: 12vmin;">${boxes[a].innerText}</button>`  //highlighting win pattern
    boxes[b].innerHTML = `<button class="box" style="font-size: 12vmin;">${boxes[b].innerText}</button>`
    boxes[c].innerHTML = `<button class="box" style="font-size: 12vmin;">${boxes[c].innerText}</button>`
    disableBoxes();
};

const checkWinner = () => {
    for(let pattern of winPatterns){
       let pos1val = boxes[pattern[0]].innerText;
       let pos2val = boxes[pattern[1]].innerText;
       let pos3val = boxes[pattern[2]].innerText;
    
       if(pos1val!="" && pos2val!="" && pos3val!=""){
        if(pos1val===pos2val && pos2val===pos3val){
            showWinner(pos1val,pattern[0],pattern[1],pattern[2]);
        }
       }
    }
}