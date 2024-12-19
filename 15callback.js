// callback is function jo ekk function ke andar pass hota hai

function Products(a, b, c){
    return a*b*c;
}
ans = Products(6, 4, 7.5);

console.log(ans);

function fun(x, y){
    let a = x(8,5,9);
    console.log(a-y);
}

fun(Products, 7);