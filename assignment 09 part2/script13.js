// count total numberof  dublicate element in an array 
function countDuplicates(arr) {
    let duplicates = 0;
    const countMap = new Map();
    
    // Iterate over the array
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      
      // If the element is already in the map, it's a duplicate
      if (countMap.has(element)) {
        const count = countMap.get(element);
        countMap.set(element, count + 1);
        
        // If this is the first time we've seen this element as a duplicate, increment the counter
        if (count === 1) {
          duplicates++;
        }
      } else {
        countMap.set(element, 1);
      }
    }
    
    return duplicates;
  }