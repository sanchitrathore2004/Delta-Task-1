import { findAngle, fireBulletFrom } from "./bullet.js";
import { arr } from "./scriptAll.js";
import { ID, Movement, aquaMoveFrom, aquaMoveTo, enableDiv, handleTankClick, moveNameArray, redMoveFrom, redMoveTo, switchTurn } from "./supportScript.js";

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


export function undo () {
    console.log(moveNameArray,redMoveFrom,redMoveTo,aquaMoveFrom,aquaMoveTo);
    let lastPiece=moveNameArray.slice(-1)[0];
    console.log(lastPiece);
    let NameOfPiece=lastPiece.split(" ")[0];
    let ColorOfPiece=lastPiece.split(" ")[1];
    moveNameArray.pop();
    if(ColorOfPiece=="red")
        {
            if(NameOfPiece!="semirico" && NameOfPiece!="rico")
                {
                    let backTo=redMoveFrom.slice(-1)[0];
                    arr[backTo].innerHTML=NameOfPiece;
                    arr[backTo].style.backgroundColor="red";
                    enableDiv(arr[backTo]);
                    console.log(arr[backTo]);
                    let emptyThisTemp=redMoveTo.slice(-1)[0];
                    let emptyThis=emptyThisTemp.slice(3,5);
                    emptyThis=parseInt(emptyThis)+0;
                    arr[emptyThis].innerHTML="";
                    arr[emptyThis].style.backgroundColor="cornsilk";
                    enableDiv(arr[emptyThis]);
                    console.log(arr[emptyThis]);
                    arr[emptyThis].removeEventListener("click",Movement);
                    redMoveFrom.pop();
                    redMoveTo.pop();
                }
                else{
                    let backTo=redMoveFrom.slice(-1)[0];
                    let newSpan=document.createElement('span');
                    if(NameOfPiece=="semirico"){
                        newSpan.innerHTML="SEMIRICO";
                        newSpan.classList.add("afterresetsemired");
                    }
                    else if(NameOfPiece=="rico"){
                        newSpan.innerHTML="RICO";
                        newSpan.classList.add("afterresetricored");
                    }
                    newSpan.classList.add("rotatee");
                    arr[backTo].appendChild(newSpan);
                    arr[backTo].style.backgroundColor="red";
                    enableDiv(arr[backTo]);
                    console.log(arr[backTo]);
                    let emptyThisTemp=redMoveTo.slice(-1)[0];
                    let emptyThis=emptyThisTemp.slice(3,5);
                    emptyThis=parseInt(emptyThis)+0;
                    arr[emptyThis].innerHTML="";
                    arr[emptyThis].style.backgroundColor="cornsilk";
                    enableDiv(arr[emptyThis]);
                    console.log(arr[emptyThis]);
                    arr[emptyThis].removeEventListener("click",Movement);
                    redMoveFrom.pop();
                    redMoveTo.pop();
                }
        }
        else if(ColorOfPiece=="aqua")
            {
                if(NameOfPiece!="semirico" && NameOfPiece!="rico")
                    {
                        let backTo=aquaMoveFrom.slice(-1)[0];
                        arr[backTo].innerHTML=NameOfPiece;
                        arr[backTo].style.backgroundColor="aqua";
                        enableDiv(arr[backTo]);
                        console.log(arr[backTo]);
                        let emptyThisTemp=aquaMoveTo.slice(-1)[0];
                        let emptyThis=emptyThisTemp.slice(3,5);
                        emptyThis=parseInt(emptyThis)+0;
                        console.log(emptyThis);
                        arr[emptyThis].innerHTML="";
                        arr[emptyThis].style.backgroundColor="cornsilk";
                        enableDiv(arr[emptyThis]);
                        console.log(arr[emptyThis]);
                        arr[emptyThis].removeEventListener("click",Movement);
                        aquaMoveFrom.pop();
                        aquaMoveTo.pop();
                    }
                    else{
                        let backTo=aquaMoveFrom.slice(-1)[0];
                    let newSpan=document.createElement('span');
                    if(NameOfPiece=="semirico"){
                        newSpan.innerHTML="SEMIRICO";
                        newSpan.classList.add("afterresetsemiaqua");
                    }
                    else if(NameOfPiece=="rico"){
                        newSpan.innerHTML="RICO";
                        newSpan.classList.add("afterresetricoaqua");
                    }
                    newSpan.classList.add("rotatee");
                    arr[backTo].appendChild(newSpan);
                    arr[backTo].style.backgroundColor="aqua";
                    enableDiv(arr[backTo]);
                    console.log(arr[backTo]);
                    let emptyThisTemp=aquaMoveTo.slice(-1)[0];
                    let emptyThis=emptyThisTemp.slice(3,5);
                    emptyThis=parseInt(emptyThis)+0;
                    arr[emptyThis].innerHTML="";
                    arr[emptyThis].style.backgroundColor="cornsilk";
                    enableDiv(arr[emptyThis]);
                    console.log(arr[emptyThis]);
                    arr[emptyThis].removeEventListener("click",Movement);
                    aquaMoveFrom.pop();
                    aquaMoveTo.pop();
                    }
            }
}


// export function swapFunction () {
//     let swapID = this.id
//     swapID=swapID.slice(3,5)
//     swapID=parseInt(swapID)+0;
//     console.log(swapID);
//     console.log(ID);
//     let tempName=arr[ID].className.split(" ")[1];
//     let tempColor=arr[ID].className.split(" ")[2];
//     let swapName=arr[swapID].className.split(" ")[1];
//     let swapColor=arr[swapID].className.split(" ")[2];
//     arr[swapID].innerHTML="";
//     let tempRico=document.createElement('span');
//     tempRico.innerHTML="RICO";
//     if(tempColor=="red")
//         {
//             tempRico.classList.add("afterresetricored");
//             arr[swapID].style.backgroundColor="red";
//         }
//         else if(tempColor=="aqua")
//             {
//                 tempRico.classList.add("afterresetricoaqua");
//                 arr[swapID].style.backgroundColor="aqua";
//             }
//             let A = findAngle(arr[ID]);
//             tempRico.style.transform=`rotate(${A}deg)`;
//             tempRico.classList.add("rotatee");
//             arr[swapID].appendChild(tempRico);
//             arr[ID].innerHTML="";
//             arr[ID].innerHTML=swapName;
//             arr[ID].style.backgroundColor=swapColor;
//             let crr = [arr[ID-1],arr[ID+1],arr[ID-7],arr[ID-8],arr[ID-9],arr[ID+7],arr[ID+8],arr[ID+9]];
//             for(let i=0;i<crr.length;i++)
//                 {
//                     if(crr[i].innerHTML=""){
//                     crr[i].style.backgroundColor="cornsilk";
//                     crr[i].removeEventListener("click", handleTankClick);
//                 }
//                 }
//                 switchTurn();
// }