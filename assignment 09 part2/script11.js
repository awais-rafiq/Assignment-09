//  count frequency of each an element in array
function countFrequency(arr) {
    const freq = {};
  
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      if (freq[element]) {
        freq[element]++;
      } else {
        freq[element] = 1;
      }
    }
  
    return freq;
  }
  
  const arr = [1, 2, 3, 2, 3, 3];
  console.log(countFrequency(arr)); // output: {1: 1, 2: 2, 3: 3}