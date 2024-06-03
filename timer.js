export let timer=document.querySelector(".timer");
import { gameKhatam, gameOverSound } from "./bullet.js";
import { arr, callFunc, playSpace, reset } from "./scriptAll.js";
import { Movement, aquaPieces, colour, disableDiv, enableDiv, movePieceFrom, movePieceTo, namePiece, redPieces, switchTurn} from "./supportScript.js";


console.log(timer.innerHTML);

let timerRed=document.querySelector(".timer-red");
let timerAqua=document.querySelector(".timer-aqua");
let aquaSemirico=document.querySelector("#aquasemirico");
export var resetHua=false;

let intervalId;

    export function timerFunction(flag) {
        if (intervalId) {
            clearInterval(intervalId);
        }
    
        const updateTimer = () => {
            if (flag == 1) {
                timerAqua.innerHTML = parseInt(timerAqua.innerHTML) - 1;
                if(timerAqua.innerHTML==0)
                    {
                        disableDiv(playSpace);
                        stopGameSound();
                        gameOverSound.play();
                        console.log("red jeet gya");
                        gameKhatam.classList.add("game-over");
                        let newDiv = document.createElement('div');
                        newDiv.innerHTML=`HURRAYYYY! RED WON`;
                        newDiv.classList.add("texttostart");
                        let resetDiv = document.createElement('div');
                        resetDiv.innerHTML="PLAY AGAIN";
                        resetDiv.classList.add("texttostart");
                        gameKhatam.appendChild(newDiv);
                        gameKhatam.appendChild(resetDiv);
                        resetDiv.addEventListener("click", () => {
                            location.reload();
                        });
                        flag=3;
                    }
            } else if (flag == 0) {
                timerRed.innerHTML = parseInt(timerRed.innerHTML) - 1;
                if(timerRed.innerHTML==0)
                    {
                        disableDiv(playSpace);
                        stopGameSound();
                        gameOverSound.play();
                        gameKhatam.classList.add("game-over");
                        let newDiv = document.createElement('div');
                        newDiv.innerHTML=`HURRAYYYY! AQUA WON`;
                        newDiv.classList.add("texttostart");
                        let resetDiv = document.createElement('div');
                        resetDiv.innerHTML="PLAY AGAIN";
                        resetDiv.classList.add("texttostart");
                        gameKhatam.appendChild(newDiv);
                        gameKhatam.appendChild(resetDiv);
                        resetDiv.addEventListener("click", () => {
                            location.reload();
                        });
                        flag=3;
                    }
            }
        };
    
        intervalId = setInterval(updateTimer, 1000);
    }


    export function pauseBtn () {
        if (intervalId) {
            clearInterval(intervalId);
            intervalId = null;
        }
        for (let i=0;i<arr.length;i++)
            {
                if(arr[i] && arr[i].innerHTML!="")
                    {
                        disableDiv(arr[i]);
                    }
            }
    }


    export function resumeBtn () {
        let sign=1;
        switchTurn(sign);
        if (!intervalId) {
            timerFunction(currentFlag);
        }
    }


    // export function resetBtn () { 
    //     console.log("reset btn clicked");
    //     for(let i=0;i<arr.length;i++)
    //         {
    //             if(arr[i] && arr[i].innerHTML!="")
    //                 {
    //                     arr[i].innerHTML="";
    //                     arr[i].style.backgroundColor="cornsilk";
    //                 }
    //         }
    //         arr[4].innerHTML="TITAN"
    //         arr[4].style.backgroundColor="red";
    //         arr[8].innerHTML="CANON"
    //         arr[8].style.backgroundColor="red";
    //         arr[14].innerHTML="TANK"
    //         arr[14].style.backgroundColor="red";
    //         arr[18].style.backgroundColor="red";
    //         arr[19].style.backgroundColor="red";
            
    //         arr[61].innerHTML="TITAN"
    //         arr[61].style.backgroundColor="aqua";
    //         arr[57].innerHTML="CANON"
    //         arr[57].style.backgroundColor="aqua";
    //         arr[51].innerHTML="TANK"
    //         arr[51].style.backgroundColor="aqua";
    //         arr[46].style.backgroundColor="aqua";
    //         arr[47].style.backgroundColor="aqua";



    //         console.log(arr[18]);
    //         const newRedSemirico = document.createElement("span");
    //         newRedSemirico.innerText="SEMIRICO";
    //         newRedSemirico.classList.add("afterresetsemired");
    //         newRedSemirico.classList.add("rotatee");

    //         arr[18].appendChild(newRedSemirico);

    //         const newRedRico=document.createElement("span");
    //         newRedRico.innerText="RICO";
    //         newRedRico.classList.add("afterresetricored");
    //         newRedRico.classList.add("rotatee");

    //         arr[19].appendChild(newRedRico);

    //         const newAquaRico=document.createElement("span");
    //         newAquaRico.innerText="RICO";
    //         newAquaRico.classList.add("afterresetricoaqua");
    //         newAquaRico.classList.add("rotatee");

    //         arr[47].appendChild(newAquaRico);

    //         const newAquaSemirico=document.createElement("span");
    //         newAquaSemirico.innerText="SEMIRICO";
    //         newAquaSemirico.classList.add("afterresetsemiaqua");
    //         newAquaSemirico.classList.add("rotatee");

    //         arr[46].appendChild(newAquaSemirico);

    //         timerAqua.innerHTML="300";
    //         timerRed.innerHTML="300";
    //         timerFunction(1);
    //         for(let i=0;i<arr.length;i++)
    //             {
    //                 if(arr[i])
    //                     {
    //                         arr[i].removeEventListener("click",Movement);
    //                     }
    //             }
    //             for(let i=0;i<arr.length;i++)
    //                 {
    //                     if(arr[i] && i!=4 && i!=8 && i!=14 && i!=18 && i!=19 && i!=46 && i!=47 && i!=51 && i!=57 &&i!=61)
    //                         {
    //                             console.log(arr[i]);
    //                             enableDiv(arr[i]);
    //                         }
    //                 }
    //                 movePieceFrom.innerHTML="FROM";
    //                 movePieceTo.innerHTML="TO";
    //                 namePiece.innerHTML="PIECE NAME";
    //                 resetHua=true;
    //             switchTurn();
    //             callFunc();
    //         }
