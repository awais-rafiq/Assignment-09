// search an element in an array



let arr=[-1,2,3-4,-5,6-7,8]
let negArr=[];
 for(let i=0; i<arr.lenght; i++){
     if(arr[i]<0){
         negArr.push(arr[i])
     }
 }
 console.log(negArr);
