// // a proram to print all negative element in array
// let arr=[-9,-8,7,6,-4,-3]
// const negativeCount = arr.filter(num=> num<0)
// console.log(negativeCount);


let arr=[-1,2,3-4,-5,6-7,8]
let negArr=[];
 for(let i=0;i<arr.lenght;i++){
     if(arr[i]<0){
         negArr.push(arr[i])
     }
 }
 console.log(negArr);

