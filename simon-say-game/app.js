const h2 = document.querySelector("h2");

let gameSeq = [];
let userSeq = [];
let btns = ["yellow", "green", "red", "purple"];

let started = false;
let level = 0;

document.addEventListener("keypress", function(){
    if(started == false){
        started = true;
        levelUp();
    }
});

function flashBtn(btn){
    document.querySelector(`.${btn}`).classList.add("flash");
    setTimeout(function(){
        document.querySelector(`.${btn}`).classList.remove("flash");
    }, 1000);
}

function levelUp(){
    level++;
    h2.innerHTML = `Level ${level}`;

    let randomIdx = Math.floor(Math.random()*4);

    flashBtn(btns[randomIdx]);
}