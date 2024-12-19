var main = document.getElementById("main");
var img = [
    "https://i.pinimg.com/736x/98/8d/ad/988dadb8ce8eb381ee721805fab8e2b2.jpg",
    "https://i.pinimg.com/236x/f9/58/39/f9583984c7697077eaddddd342827973.jpg",
    "https://i.pinimg.com/236x/c9/3e/f8/c93ef83580fea8d3448a7df30c5a0abf.jpg",
    "https://i.pinimg.com/236x/5d/bf/ff/5dbfff1fb0c7adfc473830f6981406e3.jpg",
    "https://i.pinimg.com/236x/4a/ce/6a/4ace6a9b4c92608630a20b358abdbc70.jpg",
    "https://i.pinimg.com/474x/b5/0c/11/b50c111379f98aa65067863570a20262.jpg",
    "https://i.pinimg.com/236x/20/c4/32/20c432ae82c1e4d09e65018f4ce6dd65.jpg",
    "https://i.pinimg.com/236x/52/ef/38/52ef38de9afaa443c028e7d8a4be5ec1.jpg"

]

var s = "";
for(let i = 0; i<65; i++){
    s += `<div class="card">
            <img src="${img[Math.floor(Math.random()*img.length)]}">
        </div>`
}
main.innerHTML = s;
// https://i.pinimg.com/736x/98/8d/ad/988dadb8ce8eb381ee721805fab8e2b2.jpg
