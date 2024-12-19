// cancelIdleCallback, enter hover, outhover -> changes ho
 let x = document.getElementById("ele1");

 x.addEventListener("click", function(){
    x.style.color = "yellow";
    x.style.backgroundColor = "red";
 })

 let y = document.getElementById("ele2");

 y.addEventListener("mouseenter", function(){
    y.style.color = "white";
    y.style.backgroundColor = "orange";
 })
 y.addEventListener("mouseleave", function(){
    y.style.color = "black";
    y.style.backgroundColor = "white";
 })
 let z = document.getElementById("ele3");

 z.addEventListener("click", function(){
    z.style.color = "black";
    z.style.backgroundColor = "green";
 })