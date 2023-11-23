
let btnRed = document.getElementById("btnRed");
let btnGreen = document.getElementById("btnGreen");
let btnBlue = document.getElementById("btnBlue");

function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}

btnRed.addEventListener("click", () => {
    changeBackgroundColor("red");
});

btnGreen.addEventListener("click", () => {
    changeBackgroundColor("green");
});

btnBlue.addEventListener("click", () => {
    changeBackgroundColor("blue");
});
