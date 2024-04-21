/*This Code run Timer  */
var timer = 10;
var score = 0;
var hitrn = 0 ;

// jispe click kroge vo element par event raise hoga , aur event listener naa milne. par event element ke parent par listener dhundhega , waha bhi naa milne par event parent ke parent par listener dhundega 

function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score ;
}
function runTimer(){
    var timerinterval = setInterval(function() {

        if(timer > 0) {
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }

        else{
            clearInterval(timerinterval);
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over<h1>`;
            document.querySelector("#hitval").innerHTML = 0;
        }
   
    }, 1000);
}
/*This Code Make Bubble  */

function makeBubble(){
    var clutter = "" ;


for(var i = 1 ; i <= 133 ; i++){
    var rn = Math.floor(Math.random()*10)
   clutter += `<div class="bubble"> ${rn} </div>`;
   
   /* 
      '' => Single Quote
      `` => BackTick  
      Both are used in string . 

   */

}

document.querySelector("#pbtm").innerHTML = clutter ;

}

function getNewHit(){
    hitrn =Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn;
}

document.querySelector("#pbtm")
.addEventListener("click",function(dets){
    var clickedNum = Number(dets.target.textContent);
    if(clickedNum == hitrn){
        increaseScore();
        makeBubble();
        getNewHit(); 
    }
});


runTimer();
makeBubble();
getNewHit();





