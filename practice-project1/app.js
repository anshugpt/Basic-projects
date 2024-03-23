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
    let location = singleBox.getBoundingClientRect();
    let inside = event.clientX - location.left;
    if(inside < location.width/2){
        // left box
        let range = gsap.utils.mapRange(0, location.width/2, 255, 0, inside);
        gsap.to(singleBox, {
            backgroundColor: `rgb(${range}, 0, 0)`,
            ease: Power4,
        });
    } else {
        // right box
        let range2 = gsap.utils.mapRange(location.width/2, location.width, 0, 255, inside);
        gsap.to(singleBox, {
            backgroundColor: `rgb(0, 0, ${range2})`,
            ease: Power4,
        });
    }
});

// function mapRangeFunction(){
//     let range = gasp.utils.mapRange(0, 125, 10, 255, )
// }