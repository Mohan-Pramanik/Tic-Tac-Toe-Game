let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let msgContainer = document.querySelector(".msg-container");
let win = document.querySelector("#win");

let turnX = true; // Player X, Player Y

const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [0,4,8]
];

boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        if(turnX == true)
        {
            turnX = false;
            console.log("X");
            box.innerText = "X";
        }
        else
        {
            turnX = true;
            console.log("O");
            box.innerText = "O";
        }
        box.disabled = true;
        chkWinner();
    });    
});



const chkWinner = () =>{
    for(let pattern of winPatterns)
    {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText; 
        if(pos1Val != "" && pos2Val != "" && pos3Val != "")
        {
            if(pos1Val == pos2Val && pos2Val == pos3Val)
            {
                console.log("Winner",pos1Val);
                showWinner(pos1Val);
            }
        }
    }
};



const showWinner = (Winner)=>{
    win.innerText=`Congratulations, Winner is ${Winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();

};
const disableBoxes = () =>{
    for(let box of boxes)
    {
        box.disabled = true;
    }
       
};

const enableBoxes = () =>{
    for(let box of boxes)
    {
        box.disabled = false;
        box.innerText = "";
    }
       
};

const resetGame = ()=>{
    turnX = true;
    enableBoxes();
    msgContainer.classList.add("hide");

}

reset.addEventListener("click",resetGame);


        