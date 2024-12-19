arr = [4, "himanshu", false, [4,64,3]];

//forOf loop 
for (const it of arr) {
    console.log(it);
}

arr.forEach((ele, i, arr) => {
    console.log(i, ele, arr);
});

// both loop doesnt change value