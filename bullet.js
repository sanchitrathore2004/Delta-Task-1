import { arr } from "./scriptAll.js";

// function findAngle (array,index) {
//     console.log(array[index]);
//                     let span=array[index].querySelector(".rotatee");
//                     console.log(span);
//                     const style = window.getComputedStyle(span);
//                     let initialAngle=style.transform ||
//                     style.webkitTransform ||
//                     style.mozTransform;
//                     console.log(initialAngle);
//                     if (initialAngle && initialAngle !== 'none') {
//                         console.log(initialAngle);
//                         const values = initialAngle.split('(')[1].split(')')[0].split(',');
//                         console.log(values);
//                         const a = parseFloat(values[0]);
//                         console.log(a);
//                         const b = parseFloat(values[1]);
//                         console.log(b);
    
//                         const radians = Math.atan2(b, a);
    
//                         const angle = radians * (180 / Math.PI);
//                         finalAngleOfPeice=angle;
//                         console.log('Rotation angle:', angle, 'degrees');
//                     }
//                     return finalAngleOfPeice;
// }


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
}