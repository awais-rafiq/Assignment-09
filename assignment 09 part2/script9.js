// a program to insert an element in array
// method 1
let arr = [1, 2, 3, 4, 5];
arr.splice(3, 0, 25);
console.log(arr);

// method 2
let arr1 = [1, 2, 3, 4, 5];
let index = 3;
let element = 25;
arr1.splice(index, 0, element)
console.log(arr1);