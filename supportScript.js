import { bullet, findAngle } from "./bullet.js";
import { arr, callFunc, posPiece, rotation, rotateObjLeft, rotateObjRight, reset, sign } from "./scriptAll.js";
import { resetHua, resumeBtn, timerFunction } from "./timer.js";
let finalRotation;
export let movePieceFrom=document.querySelector(".from");
let clickSound=document.querySelector("#click-sound");
let jumpSound=document.querySelector("#jump-sound");
export let namePiece=document.querySelector(".name-piece");
export let movePieceTo=document.querySelector(".to");
let red=[];
let aqua=[];
let drr=[];
export let prevRotation=[];
let e=0;
let resume = document.querySelector(".resume");
let currTurn=document.querySelector(".currTurn");
var turn="aqua";
let mainSign;
let u=1;
let i=0;
let j=0;
let brr=[];
export let ID;
let IDD;
let html;
export let classTitle;
export let colour;
export let colarr;
let crr = [];
let flag=0;
export let redPieces=[];
export let aquaPieces=[];
let v=0;
let l=0;
let k=0;
let p=0;
let q=0;
let s=0;
let t=0;
let previousSelected=null;
export let moveNameArray=[];
export let aquaMoveFrom=[];
export let redMoveFrom=[];
export let aquaMoveTo=[];
export let redMoveTo=[];
export function Movement(){
    clickSound.play();
    if(previousSelected){
        console.log(previousSelected);
        let previousClassName=previousSelected.className;
        let previousColor = previousClassName.split(" ")[2];
        previousSelected.style.backgroundColor=previousColor;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] && arr[i]!=previousSelected) {
                if(arr[i].innerHTML==""){
                arr[i].style.backgroundColor = "cornsilk"; // Reset background color
            }
                arr[i].removeEventListener("click", handleTankClick); // Remove event listener
            }
        }
        previousSelected = null;
    }
    for(let i=0;i<arr.length;i++)
        {
            if(arr[i] && arr[i].innerHTML=="")
                {
                    arr[i].style.backgroundColor="cornsilk";
                }
                
        }
console.log(posPiece);
ID=this.id;
console.log(ID);
ID=ID.slice(3,5);
console.log(ID);
ID = parseInt(ID)+0;
console.log(`jaroori id ${ID}`);
html= this.innerHTML;
classTitle= this.className;
colarr=classTitle.split(" ");
colour=colarr[2];

        // redMoveFrom=[];
        // aquaMoveFrom=[];
console.log(colour);
// if(colour=="red")
//     {
//         for(let i=0;i<redPieces.length;i++)
//             {
//                 if(arr[redPieces[i]] && arr[redPieces[i]]!=this)
//                     {
//                         disableDiv(arr[redPieces[i]]);
//                     }
//             }
//     }
//     else if (colour=="aqua")
//         {
//             for(let i=0;i<aquaPieces.length;i++)
//                 {
//                     if(arr[aquaPieces[i]] && arr[aquaPieces[i]]!=this)
//                         {
//                             disableDiv(arr[aquaPieces[i]]);
//                         }
//                 }
                
//         }
        redPieces=[];
        aquaPieces=[];
arr[ID].style.backgroundColor="cornsilk";
console.log(colarr[1]);
if(colarr[1]=="semirico" || colarr[1]=="rico")
    {
        rotation.classList.add("rico");
        rotateObjLeft.addEventListener("click", rotate);
        rotateObjRight.addEventListener("click", rotate);
        flag=1;
        // if(colarr[1]=="rico")
        //     {
        //         for(let i=0;i<arr.length;i++)
        //             {
        //                 if(arr[i] && arr[i].innerHTML!="" && arr[i].innerHTML!="TITAN" && arr[i].innerHTML!="titan"){
        //                     enableDiv(arr[i]);
        //                     arr[i].removeEventListener("click", Movement);
        //                     arr[i].addEventListener("click", swapFunction);
        //                 }
        //             }
        //     }
    }
    if(colarr[1]=="CANON")
        {
            brr = [arr[ID+1],arr[ID-1]];
        }
        else
        {
            brr = [arr[ID-1],arr[ID+1],arr[ID-7],arr[ID-8],arr[ID-9],arr[ID+7],arr[ID+8],arr[ID+9]];
            drr=brr;
        }
        console.log(brr);
        for(let i=0;i<brr.length;i++)
            {
                if(brr[i])
                    {
                        let CID = brr[i].id;
                        CID=CID.slice(3,5);
                        CID = parseInt(CID);
                        crr[i]=CID;
                    }
                    }
            console.log(crr);
for (let i=0;i<brr.length;i++) {
    if(brr[i])
        {   if(brr[i].innerHTML===""){
            if(brr.length>2){
            if((ID-1)%8==0)
                {
                    if(i!=0 && i!=4 && i!=5)
                        {
                            brr[i].style.backgroundColor = "green";
                            brr[i].addEventListener("click", handleTankClick);
                        }
                }
                else if (ID%8==0)
                    {
                        if(i!=1 && i!=7 && i!=2)
                            {
                                brr[i].style.backgroundColor = "green";
                                brr[i].addEventListener("click", handleTankClick);
                            }
                    }
                else
                {
                    brr[i].style.backgroundColor = "green";
                    brr[i].addEventListener("click", handleTankClick);
                }
        }
        else if (brr.length==2)
            {
                for(let i=0;i<brr.length;i++){
                    console.log(brr);
            if(brr[i].innerHTML===""){
                if(ID==57 || ID==1)
                    {
                        if(i==0)
                            {
                                brr[i].style.backgroundColor = "green";
                                brr[i].addEventListener("click", handleTankClick);
                            }
                    }
                    else if (ID==64 || ID==8)
                        {
                            if(i==1)
                                {
                                    brr[i].style.backgroundColor = "green";
                                    brr[i].addEventListener("click", handleTankClick);
                                }
                        }
                        else 
                        {
                            brr[i].style.backgroundColor = "green";
                            brr[i].addEventListener("click", handleTankClick);
                        }
                    }
                }
            }
    }
}
 }
 previousSelected = this;
}
 export function handleTankClick () {
    if(colour=="red")
        {
            redMoveFrom[p]=ID;
            p++;
            let moveFrom=document.createElement('div');
            moveFrom.innerHTML=`box${ID}`;
            moveFrom.classList.add("bgcolor");
            movePieceFrom.appendChild(moveFrom);
        }
        else if(colour=="aqua")
            {
                aquaMoveFrom[q]=ID;
                q++;
                let moveFrom=document.createElement('div');
                moveFrom.innerHTML=`box${ID}`;
                moveFrom.classList.add("bgcolor");
                movePieceFrom.appendChild(moveFrom);   
            }
            console.log("FROM",aquaMoveFrom,redMoveFrom);
            let moveName=document.createElement('div');
                moveNameArray[v]=`${colarr[1]} ${colour}`;
                v++;
                console.log("NAME",moveNameArray);
            moveName.innerHTML=`${u}) ${colarr[1]} ${colour}`;
            moveName.classList.add("bgcolor");
            u++;
            namePiece.appendChild(moveName);
    jumpSound.play();
     console.log(brr);
     this.innerHTML = html;
     if(flag=1)
        {
            // rotateObjLeft.addEventListener("click", rotateLeft);
            rotation.classList.remove("rico");
        }
     console.log(html);
     let posTank = document.querySelector(`#box${ID}`);
     posTank.innerHTML = "";
     posTank.removeEventListener("click", Movement);
     posTank.style.backgroundColor = "cornsilk";
     for (const b of brr) {
         {
             if(b && b.innerHTML!=`${html}`)
                {   if(b.innerHTML===""){
                    b.style.backgroundColor = "cornsilk";}  
                }
                
            }
            
        }
        this.style.backgroundColor = `${colour}`;
        this.className=classTitle;
        let colours=classTitle.split(" ");
        let colourr=colours[2];
        IDD=this.id;
        if(colourr=="aqua")
            {
                aquaMoveTo[s]=IDD;
                s++;
                let pieceTO=document.createElement('div');
                pieceTO.innerHTML=IDD;
                pieceTO.classList.add("bgcolor");
                movePieceTo.appendChild(pieceTO);
            }
            else if(colourr=="red")
                {
                    redMoveTo[t]=IDD;
                    t++;
                    let pieceTO=document.createElement('div');
                    pieceTO.innerHTML=IDD;
                    pieceTO.classList.add("bgcolor");
                    movePieceTo.appendChild(pieceTO);
                }
                console.log("TO",aquaMoveTo,redMoveTo);
                // aquaMoveTo=[];
                // redMoveTo=[];
        console.log(this.className);
        removeTankListener(this);
        callFunc();
        switchTurn();
        bullet(colourr);
    }


    export  function removeTankListener  (iam) {
          for (const b of brr) {
              if(b)
                {
                    b.removeEventListener("click", handleTankClick);
                }
              
          }
      }

      let rotationAngle=0;

      function rotate () {
        if(colour=="red")
            {
                redMoveFrom[p]=ID;
                p++;
                let moveFrom=document.createElement('div');
                moveFrom.innerHTML=`box${ID}`;
                moveFrom.classList.add("bgcolor");
                movePieceFrom.appendChild(moveFrom);
            }
            else if(colour=="aqua")
                {
                    aquaMoveFrom[q]=ID;
                    q++;
                    let moveFrom=document.createElement('div');
                    moveFrom.innerHTML=`box${ID}`;
                    moveFrom.classList.add("bgcolor");
                    movePieceFrom.appendChild(moveFrom);   
                }
                console.log("FROM",aquaMoveFrom,redMoveFrom);
                let moveName=document.createElement('div');
                    moveNameArray[v]=`${colarr[1]} ${colour}`;
                    v++;
                    console.log("NAME",moveNameArray);
                moveName.innerHTML=`${u}) ${colarr[1]} ${colour}`;
                moveName.classList.add("bgcolor");
                u++;
                namePiece.appendChild(moveName);
            let rotationElement = arr[ID].querySelector(".rotatee");
            let currentRotation = rotationElement.dataset.rotationAngle ? parseInt(rotationElement.dataset.rotationAngle) : 0;
        
            if (!rotationElement.dataset.rotationAngle) {
                if (colarr[1] == "semirico" && colarr[2] == "red") {
                    currentRotation = -45;
                } else if (colarr[1] == "rico" && colarr[2] == "red") {
                    currentRotation = 45;
                } else if (colarr[1] == "rico" && colarr[2] == "aqua") {
                    currentRotation = 135;
                } else if (colarr[1] == "semirico" && colarr[2] == "aqua") {
                    currentRotation = -135;
                }
            }
            prevRotation[e]=currentRotation;
            e++;
            console.log(prevRotation);
            if (this.innerHTML == "ANTICLOCKWISE") {
                console.log("got anti");
                currentRotation -= 90;
                let displayRotation=document.createElement('div');
                displayRotation.innerHTML=`${currentRotation} DEGREE`;
                displayRotation.classList.add("bgcolor");
                movePieceTo.appendChild(displayRotation);
            } else if (this.innerHTML == "CLOCKWISE") {
                console.log("got clockwise");
                currentRotation = currentRotation+90;
                let displayRotation=document.createElement('div');
                displayRotation.innerHTML=`${currentRotation} DEGREE`;
                displayRotation.classList.add("bgcolor");
                movePieceTo.appendChild(displayRotation);
            }
        
            rotationElement.style.transform = `rotate(${currentRotation}deg)`;
        
            rotationElement.dataset.rotationAngle = currentRotation;
                rotation.classList.remove("rico");
                brr = [arr[ID-1],arr[ID+1],arr[ID-7],arr[ID-8],arr[ID-9],arr[ID+7],arr[ID+8],arr[ID+9]];
                for (const e of brr) {
                    if(e && e.innerHTML=="")
                        {
                            e.style.backgroundColor="cornsilk";
                        }
                }
                arr[ID].style.backgroundColor=`${colour}`;
                if(colarr[2]=="red")
                    {
                        console.log(arr[ID]);
                        arr[ID].style.backgroundColor="red";
                    }
                    else if(colarr[2]=="aqua")
                        {
                            console.log(arr[ID]);
                            arr[ID].style.backgroundColor="aqua";
                        }
                        if(drr.length>2){
                            if((ID-1)%8==0)
                                {
                                    if(i!=0 && i!=4 && i!=5)
                                        {
                                            drr[i].removeEventListener("click", handleTankClick);
                                        }
                                }
                                else if (ID%8==0)
                                    {
                                        if(i!=1 && i!=7 && i!=2)
                                            {
                                                drr[i].removeEventListener("click", handleTankClick);
                                            }
                                    }
                                else
                                {
                                    drr[i].removeEventListener("click", handleTankClick);
                                }
                        }
                        console.log(ID);
                        if(ID>57)
                            {
                                let frr=[arr[ID-1],arr[ID+1],arr[ID-8],arr[ID-9],arr[ID-7]];
                                console.log(frr);
                                for(let i=0;i<frr.length;i++)
                                    {
                                        console.log("yaha tk aara h");
                                        if(frr[i])
                                            {
                                                console.log(arr[frr[i]],"hata dia");
                                                frr[i].removeEventListener("click", handleTankClick);
                                            }
                                    }
                                    frr=[];
                            }
                            else if(ID<9)
                                {
                                    let grr=[arr[ID-1],arr[ID+1],arr[ID+8],arr[ID+9],arr[ID+7]];
                                    console.log(grr);
                                    for(let i=0;i<grr.length;i++)
                                        {
                                            console.log("yaha tk aara h");
                                            if(grr[i])
                                                {
                                                    console.log(arr[grr[i]],"hata dia");
                                                    grr[i].removeEventListener("click", handleTankClick);
                                                }
                                        } 
                                        grr=[];
                                }
                switchTurn();
                bullet(colour);
      }


      export function switchTurn(sign) {
        for (let i = 0; i < arr.length; i++) {
if (arr[i] && isRed(getComputedStyle(arr[i]).backgroundColor)) {
    // Extract number from the id
    let idNumber = arr[i].id.match(/\d+/);
    if (idNumber) {
        red.push(Number(idNumber[0])); 
        l++;
    }
}
}

console.log(redPieces);
for (let i = 0; i < arr.length; i++) {
if (arr[i] && isAqua(getComputedStyle(arr[i]).backgroundColor)) {
    let idNumber = arr[i].id.match(/\d+/);
    if (idNumber) {
        aqua.push(Number(idNumber[0])); 
        l++;
    }
}
}


console.log(`red=${red}`);
console.log(`aqua=${aqua}`);
console.log(turn);
        if(sign==1)
            {
                if(turn!="aqua")
                    {
                        timerFunction(1);
                        for (const a of aqua) {
                            if(arr[a]){
                            enableDiv(arr[a]);
                        }
                        }
                        for (const r of red) {
                            if(arr[r]){
                            disableDiv(arr[r]);
                        }
                        }
                        turn = "red";
                    }
                    else if (turn != "red")
                        {
                            timerFunction(0);
                            for (const r of red) {
                                if(arr[r]){
                                enableDiv(arr[r]);
                            }
                            }
                            for (const a of aqua) {
                                if(arr[a]){
                                disableDiv(arr[a]);
                            }
                            }
                            turn = "aqua";
                        }
                        sign=0;
            }
        else if(turn=="aqua")
            {
                timerFunction(1);
                for (const a of aqua) {
                    if(arr[a]){
                    enableDiv(arr[a]);
                }
                }
                for (const r of red) {
                    if(arr[r]){
                    disableDiv(arr[r]);
                }
                }
                turn = "red";
                currTurn.innerHTML="AQUA";
            }
            else if (turn == "red")
                {
                    timerFunction(0);
                    for (const r of red) {
                        if(arr[r]){
                        enableDiv(arr[r]);
                    }
                    }
                    for (const a of aqua) {
                        if(arr[a]){
                        disableDiv(arr[a]);
                    }
                    }
                    turn = "aqua";
                    currTurn.innerHTML="RED";
                }
                red=[];
                aqua=[];
}



    export function disableDiv(div) {
        div.addEventListener('click', preventInteraction, true);
        div.style.opacity = '0.8'; // Optional: visual feedback
    }
    
    export function enableDiv(div) {
        div.removeEventListener('click', preventInteraction, true);
        div.style.opacity = ''; // Optional: visual feedback
    }
    
    export function preventInteraction(event) {
        event.stopPropagation();
        event.preventDefault();
    }

    function isRed(color) {
        const redColors = ["red", "rgb(255, 0, 0)", "#ff0000"];
        return redColors.includes(color.toLowerCase());
    }

    function isAqua(color) {
        const aquaColors = ["aqua", "rgb(0, 255, 255)", "#00ffff"];
        return aquaColors.includes(color.toLowerCase());
    }