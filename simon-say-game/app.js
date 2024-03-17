const h2 = document.querySelector("h2");
const allBtns = document.querySelectorAll(".btn");

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

allBtns.forEach(function(btn){
    btn.addEventListener("click", btnPress);
});

function btnPress(){
    flashUser(this);
    userSeq.push(this.getAttribute("id"));
    checkAns(userSeq.length-1);
}

function checkAns(idx){
    if(userSeq[idx] == gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp, 500);
        }
    } else {
        h2.innerHTML = "Game over please press any key to start!";
    }
}

function flashBtn(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 300);
}

function flashUser(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    }, 200);
}

function levelUp(){
    userSeq = [];
    level++;
    h2.innerHTML = `Level ${level}`;

    let randomIdx = Math.floor(Math.random()*4);
    gameSeq.push(btns[randomIdx]);
    let btn = document.querySelector(`.${btns[randomIdx]}`);

    flashBtn(btn);
}