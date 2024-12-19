function b(a){
    console.log(a);
}
let a = "Himanshu";
let c = "Ravi";
// setTimeout(()=>b(a), 3*1000);
// setTimeout(()=>b(c), 1*1000); // example of arrow function

function print(i){
    console.log(i);
}

function onetoten(){

    for(let i = 10; i>=0; i--){
        setTimeout(()=>print(Math.floor(Math.random()*10)), (10-i)*1000);
    }
}
onetoten();

