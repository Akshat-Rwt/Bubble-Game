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