let n = 10;

function printonetoten(n){
    for(let i = 1; i<=n; i++){
        console.log(i);
    }
}

printonetoten(100);

function isEqual(a, b){
    return a===b;
}

console.log(isEqual(7, 3));

function negtopos(a){
    return Math.abs(a);
}

console.log(negtopos(-45));


console.log(Math.floor(((Math.random()*100)%21) - 10));