
let dabba8 = document.querySelectorAll(".dabba8");
console.log(dabba8);

let dabba1 = document.querySelectorAll(".dabba1");

let turn = "bottom";

let rowup = document.querySelectorAll(".rowup");

let rowdown = document.querySelectorAll(".rowdown");

let rotation = document.querySelector(".rotation");

let arr=[];
for(let i=0;i<=64;i++)
    {
        arr[i] = document.querySelector(`#box${i}`);
    }
    console.log(arr);

    for(let i = 0;i<=64;i++)
        {
            if(arr[i])
                {
                    arr[i].addEventListener("click", function() {
                        if(arr[i].innerHTML!="")
                            {
                                Movement(i);
                            }
                    });
                }
        }

function Movement(i) {
    if(arr[i].innerHTML=="TANK")
        {
            let posTank = arr[i];
    console.log(arr[i]);
    arr[i].innerHTML="*TANK";
    arr[i].style.backgroundColor="cornsilk";
    let brr = [arr[i-1],arr[i+1],arr[i-7],arr[i-8],arr[i-9],arr[i+7],arr[i+8],arr[i+9]];
    console.log(brr);


    const handleTankClick = function () {
        console.log(brr);
        this.innerHTML = "TANK";
        this.style.backgroundColor = "aqua";
        posTank.innerHTML = "";
        posTank.style.backgroundColor = "cornsilk";
        for (const b of brr) {
            if (b && b.innerHTML != "TANK") {
                b.style.backgroundColor = "cornsilk";
            }
        }
    }

    for (const b of brr) {
        if(b)
            {
                b.style.backgroundColor = "green";
                b.addEventListener("click", handleTankClick);
            }
    }

    const removeTankListener = function () {
        for (const b of brr) {
            b.removeEventListener("click", handletankClick);
        }
                }
                removeTankListener;
    }   
        else if (arr[i].innerHTML=="TITAN")
            {
                console.log("titan click hua");
    let posTitan = arr[i];
    console.log(arr[i]);
    arr[i].innerHTML="*TITAN";

    let brr = [arr[i-1],arr[i+1],arr[i-7],arr[i-8],arr[i-9],arr[i+7],arr[i+8],arr[i+9]];
    console.log(brr);

    const handleTitanClick = function () {
        console.log(brr);
        this.innerHTML = "TITAN";
        this.style.backgroundColor = "aqua";
        posTitan.innerHTML = "";
        posTitan.style.backgroundColor = "cornsilk";
        for (const b of brr) {
            if (b && b.innerHTML != "TITAN") {
                b.style.backgroundColor = "cornsilk";
            }
        }
    }

    for (const b of brr) {
        if(b)
            {
                b.style.backgroundColor = "green";
                b.addEventListener("click", handleTitanClick);
            }
    }

    const removeTitanListener = function () {
        for (const b of brr) {
            b.removeEventListener("click", handleCanonClick);
        }
                }
                removeTitanListener;
            }
            else if (arr[i].innerHTML=="CANON")
                {
                    posCanon=arr[i];
                    console.log(posCanon);
                    let brr=[arr[i+1],arr[i-1]];
                    arr[i].innerHTML="*CANON";

                    const handleCanonClick = function () {
                        this.innerHTML = "CANON";
                        this.style.backgroundColor = "aqua";
                        posCanon.innerHTML = "";
                        posCanon.style.backgroundColor = "cornsilk";
                        for (const b of brr) {
                            if (b.innerHTML != "CANON") {
                                b.style.backgroundColor = "cornsilk";
                            }
                        }
                    };
    for (const b of brr) {
        b.style.backgroundColor = "green";
        b.addEventListener("click", handleCanonClick);
    }

    const removeCanonListener = function () {
        for (const b of brr) {
            b.removeEventListener("click", handleCanonClick);
        }
                }
                removeCanonListener;
    }  
    
    else if (arr[i].innerHTML=="SEMIRICO")
        {
            posSemiRico=arr[i];
            console.log(posSemiRico);
            let brr = [arr[i-1],arr[i+1],arr[i-7],arr[i-8],arr[i-9],arr[i+7],arr[i+8],arr[i+9]];
            rotation.classList.add("rico");
            arr[i].innerHTML="*SEMIRICO";

            const handleSemiRicoClick = function () {
                this.innerHTML="SEMIRICO";
                this.style.backgroundColor="aqua";
                posSemiRico.innerHTML="";
                posSemiRico.style.backgroundColor = "cornsilk";
                for(const b of brr) {
                    if(b.innerHTML != "SEMIRICO" && b.innerHTML=="")
                        {
                            b.style.backgroundColor = "cornsilk";
                        }
                }
                rotation.classList.remove("rico");
            };

            for(const b of brr) 
                {
                    if(b.innerHTML=="")
                        {
                            b.style.backgroundColor="green";
                        }
                    b.addEventListener("click", handleSemiRicoClick);
                }
                const removeSemiRicoListener = function () {
                    for(const b of brr) 
                        {
                            b.removeEventListener("click", handleSemiRicoClick);
                        }
                }
                removeSemiRicoListener;
        }
}
