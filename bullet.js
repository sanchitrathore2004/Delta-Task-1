import { arr, mode, stopGameSound } from "./scriptAll.js";
import { Movement } from "./supportScript.js";
import { timerFunction } from "./timer.js";

let finalAngleOfPeice;
export let destroyedSemirico=[];
export let destroyedSemiAngle=[];
let c=0;
let d=0;
let collidables=[];
let flag;
let j=0;
let hitSound = document.querySelector("#hit-sound");
let collideSound=document.querySelector("#collide-sound");
let semiHit=document.querySelector("#semi-hit");
export let gameOverSound=document.querySelector("#game-over");
export let gameKhatam = document.querySelector(".start-game");
let check=true;
let bD=null;
let cD=null;
let colorHatao=null;

export function setDirection () {
    console.log(this);
    colorHatao=this;
    this.style.backgroundColor="darkkhaki";
    if(this.innerHTML=="+45 DEG")
        {
            bD="p45";
            console.log(bD);
        }
        else if(this.innerHTML=="-45 DEG")
            {
                bD="n45";
                console.log(bD);
            }
            else if (this.innerHTML=="LEFT")
                {
                    bD="left";
                    console.log(bD);
                }
                else if(this.innerHTML=="RIGHT")
                    {
                        bD="right";
                        console.log(bD);
                    }
}
export function bullet(colourr) {
    if (colourr == "aqua") {
        if(bD){
            for (let i = 57; i <= 64; i++) {
                if (arr[i].innerHTML == "CANON") {
                            fireBulletFrom(arr[i], `${bD}`);
                        }
                }
        }
        else{
        for (let i = 57; i <= 64; i++) {
            if (arr[i].innerHTML == "CANON") {
                        fireBulletFrom(arr[i], 'up');
                    }
            }
        }
        }
     else if (colourr == "red") {
        if(bD){
            for (let i = 1; i <= 8; i++) {
                if (arr[i].innerHTML == "CANON") {
                    fireBulletFrom(arr[i], `${bD}`);
                    break;
                }
            }
        }
        else{
        for (let i = 1; i <= 8; i++) {
            if (arr[i].innerHTML == "CANON") {
                fireBulletFrom(arr[i], 'down');
                break;
            }
        }
    }
    }
    bD=null;
}

export function fireBulletFrom(canonElement, direction) {
    if(canonElement.classList.contains('tank') || canonElement.classList.contains('TANK'))
        {
            console.log("holaaaaaaaaaa");
            check=false;
        }
        if(check);
            {
                hitSound.play();
            }
            check=true;
    const bulletContainer = document.getElementById('bullet-container');
    const bullet = document.createElement('div');
    bullet.classList.add(`bullet-${direction}`);
    bullet.dataset.direction = direction;

    const rect = canonElement.getBoundingClientRect();
    if (direction === 'left' || direction === 'right') {
        bullet.style.left = `${rect.left + rect.width / 2}px`;
        bullet.style.top = `${rect.top + rect.height / 2}px`;
    } else if (direction === 'up' || direction === 'down') {
        bullet.style.left = `${rect.left + rect.width / 2}px`;
        bullet.style.top = `${rect.top}px`;
    }

    bulletContainer.appendChild(bullet);
    if(colorHatao){
    colorHatao.style.backgroundColor="bisque";
    colorHatao=null;
}
    collidables=[];
    j=0;
    detectCollision(bullet,canonElement);
}

function detectCollision(bullet,comingFrom) {
    console.log(comingFrom.id);
    for(let i=0;i<arr.length;i++)
        {
            if(arr[i] && arr[i].id==comingFrom.id)
                {
                    console.log(`${i}continue`);
                    continue;
                }
                else if (arr[i] && arr[i].id!=comingFrom.id)
                    {
                        if(arr[i].innerHTML!="")
                            {
                                console.log(`collidables ke ander${i}`);
                                collidables[j]=arr[i];
                                j++;
                            }
                    }
        }
        console.log(collidables);
    const checkCollision = setInterval(() => {
        const bulletRect = bullet.getBoundingClientRect();
        
        collidables.forEach(piece => {
            const pieceRect = piece.getBoundingClientRect();
            if (bulletRect.top < pieceRect.bottom &&
                bulletRect.bottom > pieceRect.top &&
                bulletRect.left < pieceRect.right &&
                bulletRect.right > pieceRect.left) {
                // Collision detected
                // collideSound.play();
                bullet.remove();
                handleCollision(bullet, piece);
                clearInterval(checkCollision); 
            }
            else 
            return;
        });

        if (bulletRect.top < 0 || bulletRect.top > window.innerHeight ||
            bulletRect.left < 0 || bulletRect.left > window.innerWidth) {
            clearInterval(checkCollision); 
            bullet.remove();
        }
    }, 10); 
    
}

function handleCollision(bullet, piece) {
    flag=1;
    console.log('Collision detected with', piece);
    var name = piece.className;
    var ID=piece.id;
    var tempID=ID.slice(3,5);
    console.log(tempID);
    var nameTemp = name.split(" ");
    var bulletDirection = bullet.dataset.direction;
    console.log(bulletDirection);

    if (nameTemp[1] == "semirico") {
        let A = findAngle(piece);
        console.log(A);

        if (bulletDirection == "up") {
            if(A==-45)
                {
                    fireBulletFrom(piece,'right');
                }
                else if(A==45)
                {
                    fireBulletFrom(piece,'left');
                }
                else if(A==-135 || A==135)
                    {
                        if(mode=="hackerMode"){
                        semiHit.play();
                        let P=findAngle(arr[tempID]);
                        arr[tempID].innerHTML="";
                        arr[tempID].style.backgroundColor="cornsilk";
                        arr[tempID].removeEventListener("click", Movement);
                        destroyedSemirico[c]=arr[tempID];
                        c++;
                        destroyedSemiAngle[d]=P;
                        d++;
                        bullet.remove();
                    }
                    else{
                        bullet.remove();
                    }
                    }
        } else if (bulletDirection == "down") {
            if(A==-45 || A==45)
                {
                    if(mode=="hackerMode"){
                    semiHit.play();
                    let P=findAngle(arr[tempID]);
                    arr[tempID].innerHTML="";
                        arr[tempID].style.backgroundColor="cornsilk";
                        arr[tempID].removeEventListener("click", Movement);
                        destroyedSemirico[c]=arr[tempID];
                        c++;
                        destroyedSemiAngle[d]=P;
                        d++;
                    bullet.remove();
                }
                else{
                    bullet.remove();
                }
                }
                else if(A==-135)
                    {
                        fireBulletFrom(piece,'right');
                    }
                    else if(A==135)
                        {
                            fireBulletFrom(piece,'left');
                        }
        } else if (bulletDirection == "left") {
            if(A==-45)
                {
                    fireBulletFrom(piece,'down');
                }
                else if(A==45)
                    {
                        if(mode=="hackerMode"){
                        semiHit.play();
                        let P=findAngle(arr[tempID]);
                        arr[tempID].innerHTML="";
                        arr[tempID].style.backgroundColor="cornsilk";
                        arr[tempID].removeEventListener("click", Movement);
                        destroyedSemirico[c]=arr[tempID];
                        c++;
                        destroyedSemiAngle[d]=P;
                        d++;
                        bullet.remove();
                    }
                    else{
                        bullet.remove();
                    }
                    }
                    else if(A==-135)
                        {
                            fireBulletFrom(piece,'up');
                        }
                        else if(A==135)
                            {
                                if(mode=="hackerMode"){
                                semiHit.play();
                                let P=findAngle(arr[tempID]);
                                arr[tempID].innerHTML="";
                        arr[tempID].style.backgroundColor="cornsilk";
                        arr[tempID].removeEventListener("click", Movement);
                        destroyedSemirico[c]=arr[tempID];
                        c++;
                        destroyedSemiAngle[d]=P;
                        d++;
                                bullet.remove();
                            }
                            else{
                                bullet.remove();
                            }
                            }
        } else if (bulletDirection == "right") {
            if(A==-45)
                {
                    if(mode=="hackerMode"){
                    semiHit.play();
                        let P=findAngle(arr[tempID]);
                        arr[tempID].innerHTML="";
                        arr[tempID].style.backgroundColor="cornsilk";
                        arr[tempID].removeEventListener("click", Movement);
                        destroyedSemirico[c]=arr[tempID];
                        c++;
                        destroyedSemiAngle[d]=P;
                        d++;
                        bullet.remove();
                    }
                    else{
                        bullet.remove();
                    }
                    
                }
                else if(A==45)
                    {
                        fireBulletFrom(piece,'down');
                    }
                    else if(A==-135)
                        {
                            if(mode=="hackerMode"){
                            semiHit.play();
                                let P=findAngle(arr[tempID]);
                                arr[tempID].innerHTML="";
                        arr[tempID].style.backgroundColor="cornsilk";
                        arr[tempID].removeEventListener("click", Movement);
                        destroyedSemirico[c]=arr[tempID];
                        c++;
                        destroyedSemiAngle[d]=P;
                        d++;
                                bullet.remove();
                            }
                            else{
                                bullet.remove();
                            }
                            
                        }
                        else if(A==135)
                            {
                                fireBulletFrom(piece,'up');
                            }
        }
    }
    else if(nameTemp[1]=="rico")
        {
            console.log(bulletDirection);
            let A = findAngle(piece);
        console.log(A);
        

        if (bulletDirection == "up") {
            if(A==-45 || A==135)
                {
                    fireBulletFrom(piece,'right');
                }
            else if(A==45 || A==-135)
                {
                    fireBulletFrom(piece,'left');
                }
        } else if (bulletDirection == "down") {
            if(A==-45 || A==135)
                {
                    fireBulletFrom(piece,'left');
                }
                else if(A==45 || A==-135)
                    {
                        fireBulletFrom(piece,'right');
                    }
        } else if (bulletDirection == "left") {
            if(A==-45 || A==135)
                {
                    fireBulletFrom(piece,'down');
                }
                else if(A==45 || A==-135)
                    {
                        fireBulletFrom(piece,'up');
                    }
        } else if (bulletDirection == "right") {
            if(A==-45 || A==135)
                {
                    fireBulletFrom(piece,'up');
                }
                else if(A==45 || A==-135)
                    {
                        fireBulletFrom(piece,'down');
                    }
        }
        }
        else if (nameTemp[1]=="TANK" || nameTemp[1]=="tank")
            {
                if(nameTemp[2]=="aqua" && bulletDirection=="up")
                    {
                        if(mode=="hackerMode"){
                        fireBulletFrom(piece,'up');
                    }
                    else{
                        bullet.remove();
                    }
                    }
                    else if (nameTemp[2]=="red" && bulletDirection=="down")
                        {
                            if(mode=="hackerMode"){
                            fireBulletFrom(piece,'down');
                        }
                        else{
                            bullet.remove();
                        }
                        }
            }
            else if(nameTemp[1]=="TITAN" || nameTemp[1]=="titan")
                {
                    if(nameTemp[2]=="red")
                        {
                            timerFunction(3);
                            stopGameSound();
                            gameOverSound.play();
                            bullet.remove();
                            gameKhatam.classList.add("game-over");
                            let newDiv = document.createElement('div');
                            newDiv.innerHTML=`HURRAYYYY! AQUA WON`;
                            newDiv.classList.add("texttostart");
                            let resetDiv = document.createElement('div');
                            resetDiv.innerHTML="PLAY AGAIN";
                            resetDiv.classList.add("texttostart");
                            gameKhatam.appendChild(newDiv);
                            gameKhatam.appendChild(resetDiv);
                            resetDiv.addEventListener("click", () => {
                                location.reload();
                            });
                            // alert("Aqua WON!!! Press the Reset Button to Restart the Game");
                        }
                        else if (nameTemp[2]=="aqua")
                            {
                                timerFunction(3);
                                stopGameSound();
                                gameOverSound.play();
                                bullet.remove();
                                gameKhatam.classList.add("game-over");
                            let newDiv = document.createElement('div');
                            newDiv.innerHTML=`HURRAYYYY! RED WON`;
                            newDiv.classList.add("texttostart");
                            let resetDiv = document.createElement('div');
                            resetDiv.innerHTML="PLAY AGAIN";
                            resetDiv.classList.add("texttostart");
                            gameKhatam.appendChild(newDiv);
                            gameKhatam.appendChild(resetDiv);
                            resetDiv.addEventListener("click", () => {
                                location.reload();
                            });
                                // alert("Red WON!!!!!! Press the Reset Button to Restart the Game");
                            }
                }
}

export function findAngle(piece) {
    console.log(piece);
    let span = piece.querySelector(".rotatee");
    console.log(span);
    const style = window.getComputedStyle(span);
    let initialAngle = style.transform ||
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
        finalAngleOfPeice = angle;
        console.log('Rotation angle:', angle, 'degrees');
    }
    return finalAngleOfPeice;
}
