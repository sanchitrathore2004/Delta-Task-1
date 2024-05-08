import { Movement } from "./supportScript.js";

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