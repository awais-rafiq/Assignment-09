// // a program to count total no of negative element in array;


let arr=[-1,2,-3,4,-5,6,-7,8,9,-10,];
let negativeCount=0;
for(let i=0; i<arr.length; i++){
  if(arr[i] > 0){
    negativeCount++;
  }
}
console.log(negativeCount);