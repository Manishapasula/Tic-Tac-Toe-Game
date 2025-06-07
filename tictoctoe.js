let boxs=document.querySelectorAll(".box")
let reset=document.querySelector(".reset")
let newgame=document.querySelector(".newgame")
let msg=document.querySelector(".msg")
let msg_newgame=document.querySelector(".msg_newgame")

let turnO=true;
let count=0;

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
const resetGame=()=>{
    turnO=true;
    enableBoxes();
    msg_newgame.classList.add("hide");

};

boxs.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("clicked");
        if(turnO){
            box.innerText="O"
            turnO=false;
        }else{
            box.innerText="X"
            turnO=true;
        }
        box.disabled=true;

        checkWinner();
    });
});
const disableBoxes=()=>{
    for(let box of boxs){
        box.disabled=true;
    }
}
const enableBoxes=()=>{
    for(let box of boxs){
        box.disabled=false;
        box.innerText="";
    }
}
const showWinner=(winner)=>{
    msg.innerText=`Congratulations, winner is ${winner}`;
    msg_newgame.classList.remove("hide");
    disableBoxes();
}

const checkWinner=()=>{
    for(let pattern of winPatterns){
        let pos1val=boxs[pattern[0]].innerText;
        let pos2val=boxs[pattern[1]].innerText;
        let pos3val=boxs[pattern[2]].innerText;

        if(pos1val !="" && pos2val !=="" && pos3val !==""){
            if(pos1val==pos2val && pos2val==pos3val) {
                console.log("winner" ,pos1val)

                showWinner(pos1val);
                return true;
            }
        }

    }
}
newgame.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);





