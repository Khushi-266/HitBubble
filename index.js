function makeBubbles(){
    
        
        var clutter = "";
    for(var i =1; i<=90; i++){
    var rn = Math.floor(Math.random()*10);
    clutter +=  `<div class="bubble">${rn}</div>` ;
    document.querySelector("#pbtm").innerHTML = clutter;

    }
    
   }

var timer = 60;
function runTimer(){
    var timerint = setInterval(function() {
        if(timer>0){
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }
        else{
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML = `<h1>Time Out</h1>`;
        }
    },1000)
}

var hitrn = 0;
function getHit(){
     hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn;
}

var score = 0;
function increaseScore(){
score += 10;
document.querySelector("#scoreval").textContent = score;
}

document.querySelector(".start").addEventListener("click", function(){
    makeBubbles();
    runTimer();
    getHit();
})



document.querySelector("#pbtm").addEventListener("click" , function(dets){
    var hitnum = Number(dets.target.textContent);
    if(hitnum == hitrn){
        increaseScore();
        makeBubbles();
        getHit();
    }
})




// getHit();
// runTimer();
// makeBubbles();
