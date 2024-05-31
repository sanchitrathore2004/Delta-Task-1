import { checkBulletDirection, redo, undo } from "./hackerMode.js";
import { Movement, switchTurn} from "./supportScript.js";
import { timer, pauseBtn, resumeBtn, timerFunction } from "./timer.js"

console.log(timer);

let dabba8 = document.querySelectorAll(".dabba8");
console.log(dabba8);

let dabba1 = document.querySelectorAll(".dabba1");

let turn = "bottom";

let rowup = document.querySelectorAll(".rowup");

let rowdown = document.querySelectorAll(".rowdown");

export let rotation = document.querySelector(".rotation");

export let arr=[];
export let info ;
export let posPiece;
export let sign;

export let rotateObjLeft = document.querySelector(".left");
export let rotateObjRight = document.querySelector(".right");
let startBtn=document.querySelector(".texttostart");
let overlay=document.querySelector(".start-game");

startBtn.addEventListener("click", () => {
    overlay.style.visibility="hidden";
})

export let reset = document.querySelector(".reset");
console.log(reset);
reset.addEventListener("click", () => {
    location.reload();
});

let pause = document.querySelector(".pause");
let resume = document.querySelector(".resume");
let undoBtn=document.querySelector(".undo");
let redoBtn=document.querySelector(".redo");

pause.addEventListener("click", pauseBtn);
resume.addEventListener("click", resumeBtn);
undoBtn.addEventListener("click", undo);
redoBtn.addEventListener("click", redo);


export let brr= [];
export function callFunc(){
for(let i=0;i<=64;i++)
    {
        arr[i] = document.querySelector(`#box${i}`);
        if(arr[i] && arr[i].innerHTML!="")
            {
                posPiece = arr[i];
                arr[i].addEventListener("click", Movement);
            }
    }
}
callFunc();
// checkBulletDirection();
switchTurn(); 