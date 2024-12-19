let x = document.querySelector("h2");
x.style.color = "red";


// setTimeout(() => {
//     x.innerHTML = "Changed"
// }, 2*1000);

x.style.fontFamily = "Gill Sans";



let arr = ["i", "hate", "you", "gursharn", "tu" , "boht", "evil", "hai!"];



for(let i = 0; i<arr.length; i++){
    setTimeout(() => {
        x.innerHTML = arr[i];
    }, i*1000);
}