let arr = [1,2,3,5,5,9,6,3,54,4];

console.log(arr);

function fun(a,b){
    return a+b;
}

let x = arr.reduce(fun);
console.log(x);