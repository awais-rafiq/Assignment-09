
// find thr number of digit in a number
// let n = 7348326836387890
// let numString = n.toString()
// console.log(numString.length)


function digits(n){
    count=0;
    if(n>=1)
    count++;
    while(n/10>=1){
        n/=10;
        count++;
    }
    console.log(count);
}
digits(1234567)







