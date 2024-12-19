let arr = [1,4,-6,7];
console.log(arr);
// let brr = [];
// for(const ele of arr){
//     brr.push(Math.abs(ele));
// }
// console.log(brr);

// map = r -> r

arr = arr.map((e)=>{
    return e*e;
});

console.log(arr);