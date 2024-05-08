import { arr, callFunc, posPiece, rotation } from "./scriptAll.js";
let brr=[];
let ID;
let html;
let classTitle;
let colour;
let colarr;
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
arr[ID].innerHTML=`*${html}`;
arr[ID].style.backgroundColor="cornsilk";
console.log(colarr[1]);
if(colarr[1]=="semirico" || colarr[1]=="rico")
    {
        rotation.classList.add("rico");
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
        
    }


    export  function removeTankListener  (iam) {
          for (const b of brr) {
              if(b)
                {
                    b.removeEventListener("click", handleTankClick);
                }
              
          }
      }