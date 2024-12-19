arr = [1,2,2,4,4];
n = arr.length;


for(let i = 0; i<n; i++){
    console.log(arr[i]);
}

arr.push(9); // push element into array

console.log(arr);

arr.pop();

console.log(arr);

//insert at front

arr.unshift(2);

console.log(arr);


// remove from front
arr.shift();

console.log(arr);
