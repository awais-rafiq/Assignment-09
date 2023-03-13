// calculate the sum of digit in a number

let num = 325567
let numString = num.toString()
let digits = numString.split('')

let sum = 0
for(let i=0 ; i < digits.length;i++){
 sum += parseInt(digits[i])
}
console.log(sum)
