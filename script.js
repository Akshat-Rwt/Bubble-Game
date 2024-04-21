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

/*This Code run Timer  */
var timer = 2;
function runTimer(){
    var timerinterval = setInterval(() => {

        if(timer > 0) {
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }

        else{
            clearInterval(timerinterval);
        }
   
    }, 1000);
}

runTimer();
makeBubble();





