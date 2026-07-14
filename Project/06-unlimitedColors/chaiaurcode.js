
function generateColor() {
    const hex = "0123456789ABCDEF";
    let color = "#";
    for(let i = 0; i < 6; i++) {
        color += hex.charAt(Math.random() * 16);
    }
    return color;
}

let intervalId;
function startChangingColor() {
    if(!intervalId) {
        intervalId = setInterval(changeBgColor, 1000);
        console.log("started");
    }

    function changeBgColor() {
        document.querySelector("body").style.backgroundColor = generateColor();
    }
}

function stopChangingColor() {
    if(intervalId) {
        console.log("Stopped");
        clearInterval(intervalId);
        intervalId = null;
    }
}

document.querySelector("#start").addEventListener("click", startChangingColor);
document.querySelector("#stop").addEventListener("click", stopChangingColor);