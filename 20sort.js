let arr = [4,5,6,-8,4,3,-6,-4,8,4,2];
console.log(arr);

arr = arr.sort(function(a,b){
    return a-b;
});

console.log(arr);

let brr = [4,5,6,-8,4,3,-6,-4,8,4,2];
console.log(brr);

brr = brr.sort(function(a,b){
    return Math.abs(a) - Math.abs(b);
});

console.log(brr);