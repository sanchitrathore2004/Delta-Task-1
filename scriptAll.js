import { setDirection } from "./bullet.js";
import { redo, undo } from "./hackerMode.js";
import { Movement, disableDiv, enableDiv, switchTurn} from "./supportScript.js";
import { timer, pauseBtn, resumeBtn, timerFunction } from "./timer.js"

console.log(timer);

let dabba8 = document.querySelectorAll(".dabba8");
console.log(dabba8);

let dabba1 = document.querySelectorAll(".dabba1");

let turn = "bottom";

let rowup = document.querySelectorAll(".rowup");

let rowdown = document.querySelectorAll(".rowdown");

export let mode=null;
let hackerMode=document.querySelector(".hacker-mode");
let start=document.querySelector(".start");
let modeSelect=document.querySelector(".mode-select");
let directionalBullet=document.querySelector(".directional-bullet");
let normalMode=document.querySelector(".normal-mode");
let currMode=document.querySelector(".curr-mode");
let modeInfo=document.querySelector(".mode-info");
let thisIsLevel=document.querySelector(".this-is-level");
let hmSound=document.querySelector("#hmSound");
let nmSound=document.querySelector("#nmSound");

export let rotation = document.querySelector(".rotation");

export let arr=[];
export let info ;
export let posPiece;
export let sign;

export let rotateObjLeft = document.querySelector(".left");
export let rotateObjRight = document.querySelector(".right");
let startBtn=document.querySelector(".texttostart");
let overlay=document.querySelector(".start-game");
let gameplaySound=document.querySelector("#gameplay-sound");

let p45=document.querySelector(".p-45");
let n45=document.querySelector(".n-45");
let leftBullet = document.querySelector(".left-bullet");
let rightBullet = document.querySelector(".right-bullet");

// p45.addEventListener("click", setDirection);
// n45.addEventListener("click", setDirection);
leftBullet.addEventListener("click", setDirection);
rightBullet.addEventListener("click", setDirection);

window.onload = function () {
    timerFunction(3);
}

hackerMode.addEventListener("click", () => {
    mode="hackerMode";
    currMode.innerHTML="HACKER MODE";
    hmSound.play();

});
normalMode.addEventListener("click", () => {
    mode=null;
    currMode.innerHTML="NORMAL MODE";
    nmSound.play();
});
disableDiv(directionalBullet);
start.addEventListener("click", () => {
    modeSelect.style.visibility="hidden";
    timerFunction(1);
    if(mode=="hackerMode"){
        enableDiv(directionalBullet);
        thisIsLevel.innerHTML="HACKER MODE";
    }
    else{
        thisIsLevel.innerHTML="NORMAL MODE";
    }
});

// n45.addEventListener("click", () => {
//     bD="n45";
//     console.log(bD);
// });

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

let checking=true;

export let brr= [];
let photo=document.querySelector(".photo");
function gameSound() {
    gameplaySound.play();
    gameplaySound.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play(); 
    }, false);
}

export function stopGameSound() {
    gameplaySound.pause();
    checking=false;
}
let sound=true;
let soundBtn=document.querySelector(".sound-btn");
// soundBtn.addEventListener("click", gameSound);
soundBtn.addEventListener("click", () => {
    if(!sound)
        {
            stopGameSound();
            sound=true;
        }
        else if(sound)
            {
                gameSound();
                sound=false;
            }
});
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