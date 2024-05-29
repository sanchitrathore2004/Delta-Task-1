export let timer=document.querySelector(".timer");
import { arr } from "./scriptAll.js";
import { disableDiv, enableDiv, switchTurn} from "./supportScript.js";

console.log(timer.innerHTML);

let timerRed=document.querySelector(".timer-red");
let timerAqua=document.querySelector(".timer-aqua");
let rotatee=document.querySelectorAll(".rotatee");
let aquaSemirico=document.querySelector('.dabba.semirico.aqua span');

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
                        alert("Red WON!!!!!!! Press the Reset Button to Restart the Game");
                    }
            } else if (flag == 0) {
                timerRed.innerHTML = parseInt(timerRed.innerHTML) - 1;
                if(timerRed.innerHTML==0)
                    {
                        alert("Aqua WON!!!!!! Press the Reset Button to Restart the Game");
                    }
            }
        };
    
        intervalId = setInterval(updateTimer, 1000);
    }


    export function resetBtn () {
        console.log("reset btn clicked");
        for(let i=0;i<arr.length;i++)
            {
                if(arr[i] && arr[i].innerHTML!="")
                    {
                        arr[i].innerText="";
                        arr[i].style.backgroundColor="cornsilk";
                    }
            }
            arr[4].innerHTML="TITAN"
            arr[4].style.backgroundColor="red";
            arr[8].innerHTML="CANON"
            arr[8].style.backgroundColor="red";
            arr[14].innerHTML="TANK"
            arr[14].style.backgroundColor="red";
            arr[18].innerHTML="SEMIRICO"
            arr[18].style.backgroundColor="red";
            arr[19].innerHTML="RICO"
            arr[19].style.backgroundColor="red";
            
            
            arr[61].innerHTML="TITAN"
            arr[61].style.backgroundColor="aqua";
            arr[57].innerHTML="CANON"
            arr[57].style.backgroundColor="aqua";
            arr[51].innerHTML="TANK"
            arr[51].style.backgroundColor="aqua";
            arr[46].innerHTML="SEMIRICO"
            arr[46].style.backgroundColor="aqua";
            arr[47].innerHTML="RICO"
            arr[47].style.backgroundColor="aqua";
            console.log(rotatee);
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