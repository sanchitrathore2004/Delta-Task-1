import { findAngle, fireBulletFrom } from "./bullet.js";
import { arr } from "./scriptAll.js";
import { ID, Movement, aquaMoveFrom, aquaMoveTo, enableDiv, handleTankClick, moveNameArray, redMoveFrom, redMoveTo, switchTurn } from "./supportScript.js";

let p45=document.querySelector(".p-45");
let pushPiece;
let nameForRedo=[];
let t=0;
let redRedoFrom=[];
let redRedoTo=[];
let aquaRedoFrom=[];
let aquaRedoTo=[];
let u=0;
let v=0;
let w=0;
let x=0;

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
    nameForRedo[t]=`${NameOfPiece} ${ColorOfPiece}`;
    t++;
    moveNameArray.pop();
    if(ColorOfPiece=="red")
        {
            if(NameOfPiece!="semirico" && NameOfPiece!="rico")
                {
                    let backTo=redMoveFrom.slice(-1)[0];
                    redRedoFrom[u]=backTo;
                    u++;
                    arr[backTo].innerHTML=NameOfPiece.toUpperCase();
                    arr[backTo].style.backgroundColor="red";
                    enableDiv(arr[backTo]);
                    console.log(arr[backTo]);
                    let emptyThisTemp=redMoveTo.slice(-1)[0];
                    let emptyThis=emptyThisTemp.slice(3,5);
                    emptyThis=parseInt(emptyThis)+0;
                    redRedoTo[v]=emptyThis;
                    v++
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
                    redRedoFrom[u]=backTo;
                    u++;
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
                    let emptyThisTemp=redMoveTo.slice(-1)[0];
                    let emptyThis=emptyThisTemp.slice(3,5);
                    emptyThis=parseInt(emptyThis)+0;
                    let A = findAngle(arr[emptyThis]);
                    newSpan.style.transform=`rotate(${A}deg)`;
                    arr[backTo].appendChild(newSpan);
                    arr[backTo].style.backgroundColor="red";
                    enableDiv(arr[backTo]);
                    console.log(arr[backTo]);
                    redRedoTo[v]=emptyThis;
                    v++
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
                        arr[backTo].innerHTML=NameOfPiece.toUpperCase();
                        arr[backTo].style.backgroundColor="aqua";
                        aquaRedoFrom[w]=backTo;
                        w++;
                        enableDiv(arr[backTo]);
                        console.log(arr[backTo]);
                        let emptyThisTemp=aquaMoveTo.slice(-1)[0];
                        let emptyThis=emptyThisTemp.slice(3,5);
                        emptyThis=parseInt(emptyThis)+0;
                        aquaRedoTo[x]=emptyThis;
                        x++;
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
                        aquaRedoFrom[w]=backTo;
                        w++;
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
        let emptyThisTemp=aquaMoveTo.slice(-1)[0];
                    let emptyThis=emptyThisTemp.slice(3,5);
                    emptyThis=parseInt(emptyThis)+0;
                    let A = findAngle(arr[emptyThis]);
        newSpan.style.transform=`rotate(${A}deg)`;
                    arr[backTo].appendChild(newSpan);
                    arr[backTo].style.backgroundColor="aqua";
                    enableDiv(arr[backTo]);
                    console.log(arr[backTo]);
                    aquaRedoTo[x]=emptyThis;
                        x++;
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

export function redo () {
    console.log(nameForRedo);
    console.log(redRedoFrom,redRedoTo);
    console.log(aquaRedoFrom,aquaRedoTo);
    let nameOfReq=nameForRedo.slice(-1)[0];
    console.log(nameOfReq);
    console.log(nameOfReq.split(" ")[1]);
    nameForRedo.pop();
    if(nameOfReq.split(" ")[1]=="red")
        {
            if(nameForRedo.slice(-1)[0].split(" ")[0]!="semirico" && nameForRedo.slice(-1)[0].split(" ")[0]!="rico"){
                if(redRedoFrom.slice(-1)[0] && redRedoTo.slice(-1)[0]){
            arr[redRedoFrom.slice(-1)[0]].innerHTML="";
            arr[redRedoFrom.slice(-1)[0]].style.backgroundColor="cornsilk";
            arr[redRedoTo.slice(-1)[0]].innerHTML=nameForRedo.slice(-1)[0].split(" ")[0].toUpperCase();
            arr[redRedoTo.slice(-1)[0]].style.backgroundColor=nameForRedo.slice(-1)[0].split(" ")[1];
        }
        }
        else{
            let newSpan=document.createElement('span');
            if(nameForRedo.slice(-1)[0].split(" ")[0]=="semirico"){
                newSpan.innerHTML="SEMIRICO";
                newSpan.classList.add("afterresetsemired");
            }
            else if(nameForRedo.slice(-1)[0].split(" ")[0]=="rico")
                {
                    newSpan.innerHTML="RICO";
                    newSpan.classList.add("afterresetricored");
                }
        newSpan.classList.add("rotatee");
        let A = findAngle(arr[redRedoFrom.slice(-1)[0]]);
        newSpan.style.transform=`rotate(${A}deg)`;
        arr[redRedoTo.slice(-1)[0]].appendChild(newSpan);
        arr[redRedoTo.slice(-1)[0]].style.backgroundColor="red";
        arr[redRedoFrom.slice(-1)[0]].innerHTML="";
        arr[redRedoFrom.slice(-1)[0]].style.backgroundColor="cornsilk";        
        }
        redRedoFrom.pop();
        redRedoTo.pop();
        }
        else if(nameOfReq.split(" ")[1]=="aqua")
            {
                if(nameForRedo.slice(-1)[0].split(" ")[0]!="semirico" && nameForRedo.slice(-1)[0].split(" ")[0]!="rico"){
                console.log("yaha aa rha h");
                if(aquaRedoFrom.slice(-1)[0] && aquaRedoTo.slice(-1)[0]){
                arr[aquaRedoFrom.slice(-1)[0]].innerHTML="";
                arr[aquaRedoFrom.slice(-1)[0]].style.backgroundColor="cornsilk";
                arr[aquaRedoTo.slice(-1)[0]].innerHTML=nameForRedo.slice(-1)[0].split(" ")[0].toUpperCase();
                arr[aquaRedoTo.slice(-1)[0]].style.backgroundColor=nameForRedo.slice(-1)[0].split(" ")[1];
            }
                }
                else{
                    let newSpan=document.createElement('span');
            if(nameForRedo.slice(-1)[0].split(" ")[0]=="semirico"){
                newSpan.innerHTML="SEMIRICO";
                newSpan.classList.add("afterresetsemiaqua");
            }
            else if(nameForRedo.slice(-1)[0].split(" ")[0]=="rico")
                {
                    newSpan.innerHTML="RICO";
                    newSpan.classList.add("afterresetricoaqua");
                }
        newSpan.classList.add("rotatee");
        let A = findAngle(arr[aquaRedoFrom.slice(-1)[0]]);
        newSpan.style.transform=`rotate(${A}deg)`;
        arr[aquaRedoTo.slice(-1)[0]].appendChild(newSpan);
        arr[aquaRedoTo.slice(-1)[0]].style.backgroundColor="aqua";
        arr[aquaRedoFrom.slice(-1)[0]].innerHTML="";
        arr[aquaRedoFrom.slice(-1)[0]].style.backgroundColor="cornsilk";    
                }
                aquaRedoFrom.pop();
                aquaRedoTo.pop();
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