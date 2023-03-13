// linear search
let num = [1,2,3,4,5,6,7,8]
// console.log("working")
let numSearch = 4
let start = num[0]
let index = -1
let end = num.length - 1
let mid = parseInt(start+end/2)
while(start<=end){
if(num[mid]==numSearch){
     num[mid];
     index = 1
}
else if(num[mid]<numSearch){
    mid = mid+1
    index = 1
}
else{
    start + mid-1
    index = 1
}


}
if(index == 1){
    console.log("Number is found")
}else{
    console.log("number is not found")
}