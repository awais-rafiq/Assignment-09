// find the power of a Number
// method 1
let num = 2
let pow = 4
let result = 1
for (let i = 1; i <= pow; i++) {
   result *= num
}
console.log(result)


// method 2

// function power(base, exponent) {
//    let result = 1;
//    if (exponent == undefined) {
//       exponent = 2;
//    }
//    for (let i = 1; i <= exponent; i++) {
//       result = result * base;
//    }
//    return result;
// }
// console.log(power(2,3))
