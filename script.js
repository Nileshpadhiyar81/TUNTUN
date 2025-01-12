var right = document.getElementsByClassName("right");
    var si = right.length;
    var z=1;
    var x = document.getElementById("myAudio"); 
    turnRight();
    function turnRight()
    {
        if(si>=1){
            si--;
        }
        else{
            si=right.length-1;
            function sttmot(i){
                setTimeout(function(){right[i].style.zIndex="auto";},300);
            }
            for(var i=0;i<right.length;i++){
                right[i].className="right";
                sttmot(i);
                z=1;
            }
        }
        right[si].classList.add("flip");
        z++;
        right[si].style.zIndex=z;
    }
    function turnLeft()
    {
        if(si<right.length){
            si++;
        }
        else{
            si=1;
            for(var i=right.length-1;i>0;i--){
                right[i].classList.add("flip");
                right[i].style.zIndex=right.length+1-i;
            }
        }
        right[si-1].className="right";
        setTimeout(function(){right[si-1].style.zIndex="auto";},350);
    }

    function playAudio()
    { 
        x.play(); 
    } 
    function pauseAudio() 
    { 
        x.pause(); 
    } 

  var e = document.getElementById("show_button");
        e.addEventListener("click", ()=>{
            main_wish2();
        })
    function main_wish2() {
        var x = document.getElementById("WISH");
        // var x = document.querySelectorAll("WISH , balloon-container");
        
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
        var y =document.getElementById("balloon-container");
        if (y.style.display === "none") {
            y.style.display = "block";
        } else {
            y.style.display = "none";
        }
        var z =document.getElementById("WISH2");
        if (z.style.display === "none") {
            z.style.display = "block";
        } else {
            z.style.display = "none";
        }
        var c =document.getElementById("balloon-container1");
        if (c.style.display === "none") {
            c.style.display = "block";
        } else {
            c.style.display = "none";
        }
        var w3 =document.getElementById("WISH3");
        if (w3.style.display === "none") {
            w3.style.display = "block";
        } else {
            w3.style.display = "none";
        }





      }
      
    function ballon_show(){
        
    }
      function random(num) {
        return Math.floor(Math.random()*num)
      }
      
      function getRandomStyles() {
        var r = random(255);
        var g = random(255);
        var b = random(255);
        var mt = random(200);
        var ml = random(50);
        var dur = random(5)+5;
        return `
        background-color: rgba(${r},${g},${b},0.7);
        color: rgba(${r},${g},${b},0.7); 
        box-shadow: inset -7px -3px 10px rgba(${r-10},${g-10},${b-10},0.7);
        margin: ${mt}px 0 0 ${ml}px;
        animation: float ${dur}s ease-in infinite
        `
      }
      
      function createBalloons(num) {
        var balloonContainer = document.getElementById("balloon-container")
        for (var i = num; i > 0; i--) {
        var balloon = document.createElement("div");
        balloon.className = "balloon";
        balloon.style.cssText = getRandomStyles();           balloonContainer.append(balloon);
        }
      }
      function createBalloons2(num) {
        var balloonContainer2 = document.getElementById("balloon-container1")
        for (var i = num; i > 0; i--) {
        var balloon = document.createElement("div");
        balloon.className = "balloon";
        balloon.style.cssText = getRandomStyles();     
        balloonContainer2.append(balloon);
        }
      }
      
      window.onload = function() {
        createBalloons(100);
        createBalloons2(100);
      }
