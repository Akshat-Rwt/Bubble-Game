/*This Code run Timer  */
var timer = 60 ;
var score = 0;

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
    var rn =Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = rn;
}


runTimer();
makeBubble();
getNewHit();





