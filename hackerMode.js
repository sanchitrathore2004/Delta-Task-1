import { fireBulletFrom } from "./bullet.js";
import { arr } from "./scriptAll.js";

let p45=document.querySelector(".p-45");
let pushPiece;

export function checkBulletDirection () {
    for(let i=0;i<arr.length;i++)
        {
            if(arr[i] && arr[i].classList.contains('CANON') && arr[i].classList.contains('aqua'))
                {
                    pushPiece=arr[i];
                }
        }
    p45.addEventListener("click", fireBulletFrom(pushPiece,'p45'));
}