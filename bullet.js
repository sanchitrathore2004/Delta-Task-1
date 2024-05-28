import { arr } from "./scriptAll.js";

let finalAngleOfPeice;
let collidables=[];
let piecee;

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

    detectCollision(bullet);
}

function detectCollision(bullet) {
    for(let i=0;i<arr.length;i++)
        {
            if(arr[i] && arr[i].innerHTML!="" && arr[i].innerHTML!="CANON")
                {
                    collidables[i] = arr[i];
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
                handleCollision(bullet, piece);
                // Collision detected
                clearInterval(checkCollision);  // Stop checking for collisions once detected
            }
            else 
            return;
        });

        // Check if bullet is out of bounds
        if (bulletRect.top < 0 || bulletRect.top > window.innerHeight ||
            bulletRect.left < 0 || bulletRect.left > window.innerWidth) {
            clearInterval(checkCollision);  // Stop checking for collisions if bullet is out of bounds
            bullet.remove();  // Remove the bullet from the DOM
        }
    }, 10);  // Check for collisions every 50 milliseconds
}

function handleCollision(bullet, piece) {
    console.log('Collision detected with', piece);
    var name = piece.className;
    var nameTemp = name.split(" ");
    var bulletDirection = bullet.dataset.direction;

    if (nameTemp[1] == "semirico") {
        let A = findAngle(piece);
        console.log(A);

        // Add logic based on bullet direction and piece angle
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
                    bullet.remove();
                }
                else if(A==45)
                    {
                        fireBulletFrom(piece,'down');
                    }
                    else if(A==-135)
                        {
                            bullet.remove();
                        }
                        else if(A==135)
                            {
                                fireBulletFrom(piece,'up');
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
        detectCollision(bullet);
    }
    else if(nameTemp[1]=="rico")
        {
            console.log(bulletDirection);
            let A = findAngle(piece);
        console.log(A);
        

        // Add logic based on bullet direction and piece angle
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
                    fireBulletFrom(piece,'down');
                }
                else if(A==45 || A==-135)
                    {
                        fireBulletFrom(piece,'up');
                    }
        }
         detectCollision(bullet);
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
