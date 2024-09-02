let gameseq = [];
let userseq = [];

let started = false;
let level = 0;
let btns=["yellow","purple","green","red"];
 
let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
    if (started == false) {
     console.log("game started");
     started=true;
     levelUp();
  }
});

function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    } ,250);
    
}

function levelUp() {
    userseq = [];
    level++;
    h2.innerText = `Level ${level}`;
    let ranind= Math.floor(Math.random()*3);
    let rancolor=btns[ranind];
    let ranbtn=document.querySelector(`.${rancolor}`);
    gameseq.push(rancolor);
    console.log(gameseq);
    btnflash(ranbtn);

}

function checkans(idx){
    

    if(userseq[idx]===gameseq[idx]){
        if(userseq.length === gameseq.length){
            setTimeout(levelUp,1000);
        }
        
    }
    else{
        h2.innerHTML=`Game over!Your score is <b>${level}</b> <br> press any key to continue`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },150);

        reset();
    }
    
}

function btnpress() {
     let btn = this;
     btnflash(btn);
     usercolor = btn.getAttribute("id");
     console.log(usercolor);
     userseq.push(usercolor);

     checkans(userseq.length - 1);
     
}

    let allbtns =document.querySelectorAll(".btn");
    for (btn of allbtns) {
       btn.addEventListener("click",btnpress);
}

function reset(){
    started=false;
    level=0;
    gameseq = [];
    userseq = [];

}


