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
let finalAngleOfPeice;
let semiRedArrNeg=[];
let semiRedArrPos=[];
let ricoRedArrGPOS=[];
let ricoRedArrLPOS=[];
let ID;
let correctedID;

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
    let knowPeice;
        let peiceClass;
        let splitClass;
        peiceClass=array[index].className;
        splitClass=peiceClass.split(" ");
        knowPeice=splitClass[1];
        if(knowPeice=="semirico" || knowPeice=="rico")
            {
                ID=array[index].id;
                correctedID=parseInt(ID.slice(3,5));
            }
            console.log(correctedID);
        console.log(knowPeice);
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
        else if(knowPeice=="semirico" || knowPeice=="rico")
            {
                let A = findAngle(array,index)
                console.log(A);
                console.log(correctedID);
                console.log("condition hit hui");
                checkArray(arr,knowPeice,correctedID,A);
            }
}

function checkArray (arr,knowPeice,correctedID,A) {
    console.log("aayaaaaaaa");
    if(knowPeice=="semirico")
        {
            if(A<0)
                {
                    console.log(correctedID);
                    for(let i=1;i<8;i++)
                        {
                            semiRedArrNeg[i-1]=arr[correctedID+i];
                            if((correctedID+i)%8==0)
                                {
                                    break;
                                }
                        }
                        console.log(semiRedArrNeg);
                }
                else if(A>0)
                    {
                        for(let i=1;i<8;i++)
                            {
                                if((correctedID-i)%8==0)
                                    {
                                        break;
                                    }
                                    semiRedArrPos[i-1]=arr[correctedID-i];
                            }
                            console.log(semiRedArrPos);
                    }
        }
        else if(knowPeice=="rico")
            {
                if((A>0 && A<90) || (A<0 && -(A)>90))
                    {
                        for(let i=1;i<8;i++)
                            {
                                if(correctedID+(8*i)<=64)
                                    {
                                        ricoRedArrLPOS[i-1]=arr[correctedID+(8*i)];
                                    }
                                else 
                                {
                                    break;
                                }
                            }
                            console.log(ricoRedArrLPOS);
                    }
                    else if ((A>0 && A>90) || (A<0 && -(A)<90))
                        {
                            for(let i=1;i<8;i++)
                                {
                                    if(correctedID-(8*i)<=1)
                                        {
                                            ricoRedArrGPOS[i-1]=arr[correctedID-(8*i)];
                                        }
                                    else 
                                    {
                                        break;
                                    }
                                }
                                console.log(ricoRedArrGPOS);
                        }
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


async function deviatedBullet (darray) {
    console.log("deviated ke ander aaya");
    console.log(darray);
    for(let i=0;i<darray.length;i++)
        {
            await movementTwo(darray,i);
        }
}

async function movementTwo (array,index) {
    console.log("m2 ke ander aaya");
    console.log(array);
    console.log(arr[array[index]]);
    if(arr[array[index]].innerHTML=="")
        {
            console.log("aaya");
            if(index>0)
                {
                    arr[array[index-1]].innerHTML="";
                }
                arr[array[index]].innerHTML=".";
                arr[array[index]].style.fontSize="60px";
                await delay(200);
                if(index==(array.length-1))
                    {
                        console.log("aarha h");
                        arr[array[index]].innerHTML="";
                    }
        }
}

function findAngle (array,index) {
    console.log(array[index]);
                    let span=array[index].querySelector(".rotatee");
                    console.log(span);
                    const style = window.getComputedStyle(span);
                    let initialAngle=style.transform ||
                    style.webkitTransform ||
                    style.mozTransform;
                    console.log(initialAngle);
                    if (initialAngle && initialAngle !== 'none') {
                        console.log(initialAngle);
                        const values = initialAngle.split('(')[1].split(')')[0].split(',');
                        console.log(values);
                        const a = parseFloat(values[0]);
                        console.log(a);
                        const b = parseFloat(values[1]);
                        console.log(b);
    
                        const radians = Math.atan2(b, a);
    
                        const angle = radians * (180 / Math.PI);
                        finalAngleOfPeice=angle;
                        console.log('Rotation angle:', angle, 'degrees');
                    }
                    return finalAngleOfPeice;
}