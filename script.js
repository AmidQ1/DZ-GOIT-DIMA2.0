const cub = document.querySelector(".cub")



function getBgColor(){
    const red = Math.round(Math.random()*255);
    const blue = Math.round(Math.random()*255);
    const green = Math.round(Math.random()*255);

    return `rgb(${red}, ${green}, ${blue})`
}

// rgb(123, 45, 68)

setInterval(() => {
    cub.style.background = getBgColor();
},3000);

// 3000