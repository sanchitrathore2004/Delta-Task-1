import { arr } from "./scriptAll.js";

let finalAngleOfPeice;
let collidables=[];
let flag;
let j=0;

export function bullet(colourr) {
    if (colourr == "aqua") {
        for (let i = 57; i <= 64; i++) {
            if (arr[i].innerHTML == "CANON") {
                fireBulletFrom(arr[i], 'up');
                break;
            }
        }
    } else if (colourr == "red") {
        for (let i = 1; i <= 8; i++) {
            if (arr[i].innerHTML == "CANON") {
                fireBulletFrom(arr[i], 'down');
                break;
            }
        }
    }
}

function fireBulletFrom(canonElement, direction) {
    const bulletContainer = document.getElementById('bullet-container');
    const bullet = document.createElement('div');
    bullet.classList.add(`bullet-${direction}`);
    bullet.dataset.direction = direction;

    const rect = canonElement.getBoundingClientRect();
    bullet.style.left = `${rect.left + rect.width / 2}px`;
    bullet.style.top = `${rect.top}px`;

    bulletContainer.appendChild(bullet);
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
    }, 50); 
    
}

function handleCollision(bullet, piece) {
    flag=1;
    console.log('Collision detected with', piece);
    var name = piece.className;
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
                        bullet.remove();
                    }
        } else if (bulletDirection == "down") {
            if(A==-45 || A==45)
                {
                    bullet.remove();
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
                        bullet.remove();
                    }
                    else if(A==-135)
                        {
                            fireBulletFrom(piece,'up');
                        }
                        else if(A==135)
                            {
                                bullet.remove();
                            }
        } else if (bulletDirection == "right") {
            if(A==-45)
                {
                    fireBulletFrom(piece,'down');
                }
                else if(A==45)
                    {
                        bullet.remove();
                    }
                    else if(A==-135)
                        {
                            fireBulletFrom(piece,'up');
                        }
                        else if(A==135)
                            {
                                bullet.remove();
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
                    fireBulletFrom(piece,'left');
                }
                else if(A==45 || A==-135)
                    {
                        fireBulletFrom(piece,'down');
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
        else if (nameTemp[1]=="TANK")
            {
                bullet.remove();
            }
            else if(nameTemp[1]=="TITAN")
                {
                    if(nameTemp[2]=="red")
                        {
                            alert("Aqua WON!!!");
                        }
                        else if (nameTemp[2]=="aqua")
                            {
                                alert("Red WON!!!");
                            }
                }
}

function findAngle(piece) {
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
