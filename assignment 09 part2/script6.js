// a program to count total  no of even and odd element in array
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evennumber = 0;
let oddnumber = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 == 0) {
    evennumber++;
  } else {
    oddnumber++;
  }
}
console.log(evennumber);
console.log(oddnumber);
// console.log(`Number of even elements: ${evennumber}`);
// console.log(`Number of odd elements: ${oddnumber}`);