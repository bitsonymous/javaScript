let arr = [1,2,3,4,5,6,7,8,9,8,7,4,5,6,1,2,3,5];


console.log(arr);


let brr = arr.filter((ele)=>{
    if(ele%2!=0) return true;
    else return false;
});

console.log(brr);