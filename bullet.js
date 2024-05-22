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
                for (let i=0;i<bulletsred.length;i++) {
                    setTimeout(() => {
                        if(i>0)
                            {
                                bulletsred[i-1].innerHTML="";
                            }
                        bulletsred[i].innerHTML=".";
                        bulletsred[i].style.fontSize="60px";
                        if(i==(bulletsred.length-1))
                            {
                                bulletsred[i].innerHTML="";
                            }
                    },i*200);
                }
            }
            else if(identify[2]=="aqua")
                {
                    for (let i=0;i<bulletsaqua.length;i++) {
                        setTimeout(() => {
                            if(i>0)
                                {
                                    bulletsaqua[i-1].innerHTML="";
                                }
                            bulletsaqua[i].innerHTML=".";
                            bulletsaqua[i].style.fontSize="60px";
                            if(i==(bulletsaqua.length-1))
                                {
                                    console.log("aarha h");
                                    bulletsaqua[i].innerHTML="";
                                }
                        },i*200);
                    }
                }
}