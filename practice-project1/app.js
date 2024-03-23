const leftBox = document.querySelector("#left");
const rightBox = document.querySelector("#right");
const singleBox = document.querySelector("#single");


// leftBox.addEventListener("mouseenter", () => {
//     leftBox.classList.add("red");
//     rightBox.classList.add("red");
// });

// leftBox.addEventListener("mouseleave", () => {
//     leftBox.classList.remove("red");
//     rightBox.classList.remove("red");
// });

// rightBox.addEventListener("mouseenter", () => {
//     leftBox.classList.add("blue");
//     rightBox.classList.add("blue");
// });

// rightBox.addEventListener("mouseleave", () => {
//     leftBox.classList.remove("blue");
//     rightBox.classList.remove("blue");
// });

singleBox.addEventListener("mousemove", (event) => {
    // console.log(`X -> ${event.clientX} & Y -> ${event.clientY}`);
    if(event.clientX>=0 && event.clientX<=125){
        // left box
        singleBox.style.backgroundColor = `rgb(${2550/event.clientX}, 0, 0)`;
    } else {
        // right box
        singleBox.style.backgroundColor = `rgb(0, 0, ${event.clientX-50})`;
    }
});