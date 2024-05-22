import { arr, callFunc, posPiece, rotation, rotateObjLeft, rotateObjRight } from "./scriptAll.js";
let red=[];
let aqua=[];
var turn="aqua";
let i=0;
let j=0;
let brr=[];
let ID;
let html;
let classTitle;
let colour;
export let colarr;
let crr = [];
let flag=0;
export function Movement(){
console.log(posPiece);
ID=this.id;
console.log(ID);
ID=ID.slice(3,5);
console.log(ID);
ID = parseInt(ID)+0;
console.log(ID);
html= this.innerHTML;
classTitle= this.className;
colarr=classTitle.split(" ");
colour=colarr[2];
console.log(colour);
// arr[ID].innerHTML=`*${html}`;
arr[ID].style.backgroundColor="cornsilk";
console.log(colarr[1]);
if(colarr[1]=="semirico" || colarr[1]=="rico")
    {
        rotation.classList.add("rico");
        rotateObjLeft.addEventListener("click", rotate);
        rotateObjRight.addEventListener("click", rotate);
        flag=1;
    }
    if(colarr[1]=="CANON")
        {
            brr = [arr[ID+1],arr[ID-1]];
        }
        else
        {
            brr = [arr[ID-1],arr[ID+1],arr[ID-7],arr[ID-8],arr[ID-9],arr[ID+7],arr[ID+8],arr[ID+9]];
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
}
 function handleTankClick () {
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
        console.log(this.className);
        removeTankListener(this);
        callFunc();
        switchTurn();
        
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
        if(colarr[1]=="semirico" && colarr[2]=="red")
            {
                rotationAngle=-45;
            }
            else if (colarr[1]=="rico" && colarr[2]=="red")
                {
                    rotationAngle=45;
                }
                else if (colarr[1]=="rico" && colarr[2]=="aqua")
                    {
                        rotationAngle=135;
                    }
                    else if (colarr[1]=="semirico" && colarr[2]=="aqua")
                        {
                            rotationAngle=-135;
                        }
        if(rotateObjLeft.innerHTML=="LEFT")
            {
                rotationAngle += 90; // Increase the angle by 45 degrees
                arr[ID].querySelector(".rotatee").style.transform = `rotate(${rotationAngle}deg)`;
            }
            else if (rotateObjRight.innerHTML=="RIGHT")
                {
                    rotationAngle += -90; // Increase the angle by 45 degrees
                    arr[ID].querySelector(".rotatee").style.transform = `rotate(${rotationAngle}deg)`;
                }
                rotation.classList.remove("rico");
                brr = [arr[ID-1],arr[ID+1],arr[ID-7],arr[ID-8],arr[ID-9],arr[ID+7],arr[ID+8],arr[ID+9]];
                for (const e of brr) {
                    if(e.innerHTML=="")
                        {
                            e.style.backgroundColor="cornsilk";
                        }
                }
                arr[ID].style.backgroundColor=`${colour}`;
      }


      export function switchTurn() {
        for(let k=0;k<arr.length;k++)
            if(arr[k] && arr[k].innerHTML!=="")
                {
                    var classy=arr[k].className;
                    var identify=classy.split(" ");
                    if(identify[2]=="red")
                        {
                            red[i]=k;
                            i++
                        }
                        else if (identify[2]=="aqua")
                            {
                                aqua[j]=k;
                                j++
                            }
                }
                console.log(`red=${red}`);
                console.log(`aqua=${aqua}`);
                console.log(turn);
                if(turn=="aqua")
                    {
                        for (const a of aqua) {
                            enableDiv(arr[a]);
                        }
                        for (const r of red) {
                            disableDiv(arr[r]);
                        }
                        turn = "red";
                    }
                    else if (turn == "red")
                        {
                            for (const r of red) {
                                enableDiv(arr[r]);
                            }
                            for (const a of aqua) {
                                disableDiv(arr[a]);
                            }
                            turn = "aqua";
                        }
                
    }




    function disableDiv(div) {
        div.addEventListener('click', preventInteraction, true);
        div.style.opacity = '0.8'; // Optional: visual feedback
    }
    
    function enableDiv(div) {
        div.removeEventListener('click', preventInteraction, true);
        div.style.opacity = ''; // Optional: visual feedback
    }
    
    function preventInteraction(event) {
        event.stopPropagation();
        event.preventDefault();
    }
    