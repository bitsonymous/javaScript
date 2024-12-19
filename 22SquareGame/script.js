let s1 = document.getElementById("s1");
let s2 = document.getElementById("s2");
let s3 = document.getElementById("s3");
let s4 = document.getElementById("s4");


s1.addEventListener("mouseenter", ()=>{
    let r = Math.floor(Math.random()*101)
    s1.innerHTML =  `<h1>${r}</h1>`;
})
var colorArr = ["red", "green", "blue"];
var counters1 = 0;
s2.addEventListener("mouseenter", ()=>{
    s2.style.backgroundColor = colorArr[counters1%3];
    counters1++;
})
s2.addEventListener("mouseleave", ()=>{
    s2.style.backgroundColor = "white";
})

s3.addEventListener("click", ()=>{
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);
    s3.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
})

s3.addEventListener("mouseleave", ()=>{
    s3.style.backgroundColor = "white";
})

s4.addEventListener("mouseenter", ()=>{
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);
    s1.style.backgroundColor = `rgb(255, ${g}, ${b})`;
    s2.style.backgroundColor = `rgb(${r}, 255, ${b})`;
    s3.style.backgroundColor = `rgb(${r}, ${g}, 255)`;
})
s4.addEventListener("mouseleave", ()=>{
    s3.style.backgroundColor = "white";
    s2.style.backgroundColor = "white";
    s1.style.backgroundColor = "white";
})
var counter = 4;
s4.addEventListener("click", ()=>{
    counter++;
    s4.innerHTML = `<h1>${counter}</h1>`;
})