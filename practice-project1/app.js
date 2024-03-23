const leftBox = document.querySelector("#left");
const rightBox = document.querySelector("#right");


leftBox.addEventListener("mouseenter", () => {
    leftBox.classList.add("red");
    rightBox.classList.add("red");
});

leftBox.addEventListener("mouseleave", () => {
    leftBox.classList.remove("red");
    rightBox.classList.remove("red");
});

rightBox.addEventListener("mouseenter", () => {
    leftBox.classList.add("blue");
    rightBox.classList.add("blue");
});

rightBox.addEventListener("mouseleave", () => {
    leftBox.classList.remove("blue");
    rightBox.classList.remove("blue");
});