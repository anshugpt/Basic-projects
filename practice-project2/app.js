// const box = document.querySelector("#box");

window.addEventListener("mousemove", function (event) {
    // let location = box.getBoundingClientRect();
    // let inside = event.clientX - location.left;

    // if(inside < location.width/2){
    //     // left
        
    // } else {
    //     // right
    // // }
    console.log(event.clientX);

    gsap.to("#box", {
        left: event.clientX + "px",
        ease: Power3,
    });
});