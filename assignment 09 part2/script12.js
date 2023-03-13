// print all unique element in array
function printUniqueElements(arr) {
    let uniqueElements = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (!uniqueElements.includes(arr[i])) {
        uniqueElements.push(arr[i]);
      }
    }
  
    console.log(uniqueElements);
  }
  
