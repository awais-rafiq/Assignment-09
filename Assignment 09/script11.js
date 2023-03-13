let num = [1,2,3,4,5,6,7,8]
let numSearch = 7
let value = -1
for(let i=0;i<num.length;i++){
    if(num[i]==numSearch){
        value = 1
    }
}
if(value == 1){
    console.log("Number is found")
}else{
    console.log("number is not found")
}