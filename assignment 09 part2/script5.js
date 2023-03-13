// a program to find second largest number in array
// function  findsecondlargest(arr){
//     let largest =arr[0];
//     let secondlargest =arr[0]
//     for(let i = 1;i<arr.length; i++){
//         if (arr[i]>largest){
//             secondlargest=largest
//             largest =arr[i];
//         }
//         else if(arr[i]>secondlargest && arr[i]!==largest){
//             secondlargest=arr[i]
//         }
//     }
//     return secondlargest;
// }




let findsecondlargestNumber = (arr = [] => ) {
    let largest =arr[0];
    let secondlargest =arr[0]
    for(let i = 1;i<arr.length; i++){
        if (arr[i]>largest){
            secondlargest=largest
            largest =arr[i];
        }
        else if(arr[i]>secondlargest && arr[i]!==largest){
            secondlargest=arr[i]
        }
    }
    return secondlargest;
}