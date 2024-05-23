import { arr, posPiece } from "./scriptAll.js";
import { classTitle } from "./supportScript.js";

let bulletsred=[];
let bulletsaqua=[];
let canonClass;
let colorSplit;
let canonColor;
var IDR;
var IDA;
let identify;
let flag=0;

export function bullet () {
    for(let i=0;i<arr.length;i++)
        {
            if(arr[i] && arr[i].innerHTML=="CANON")
                {
                    canonClass=arr[i].className;
                    colorSplit=canonClass.split(" ");
                    canonColor=colorSplit[2];
                    if(canonColor=="red")
                        {
                            IDR=i;
                            bulletsred=[arr[IDR+8],arr[IDR+16],arr[IDR+24],arr[IDR+32],arr[IDR+40],arr[IDR+48],arr[IDR+56]];
                        }
                        else if (canonColor=="aqua")
                            {
                                IDA=i;
                                bulletsaqua=[arr[IDA-8],arr[IDA-16],arr[IDA-24],arr[IDA-32],arr[IDA-40],arr[IDA-48],arr[IDA-56]];
                            }
                }
        }
        console.log(bulletsaqua);
        console.log(bulletsred);
        console.log(classTitle);
        identify=classTitle.split(" ");
        if(identify[2]=="red")
            {
                    moveBullet(bulletsred);
            }
            else if(identify[2]=="aqua")
                {
                        moveBullet(bulletsaqua);
                }
}

async function bulletMovement (array,index) {
    if(array[index].innerHTML=="")
        {
            if(index>0)
                {
                    array[index-1].innerHTML="";
                }
                array[index].innerHTML=".";
                array[index].style.fontSize="60px";
                await delay(200);
                if(index==(array.length-1))
                    {
                        console.log("aarha h");
                        array[index].innerHTML="";
                    }
        }
        else if(array[index].innerHTML=="TANK" || array.innerHTML=="CANON")
        {
            console.log(array[index-1]);
            array[index-1].innerHTML="";
            flag=1;
            return;
        }
        else if (array[index].innerHTML=="TITAN")
        {
            console.log("game over");
            array[index-1].innerHTML="";
            flag=1;
            return;
        }
        else if (array[index].innerHTML=="RICO" || array[index].innerHTML=="SEMIRICO")
            { 
                
                console.log(array[index-1]);
                array[index-1].innerHTML="";
                flag=1;
                return;
            }
}

async function moveBullet (array) {
    for(let i=0;i<array.length;i++)
        {
            await bulletMovement(array,i);
            if(flag==1)
                {
                    flag=0;
                    return;
                }
        }
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}