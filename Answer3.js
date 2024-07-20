//Write a function that takes a nested array and returns a flattened array.

function flatArray(nestedArray) {
  const output = new Array();
  
  function flat(array){
    for (const item of array) {
      if (Array.isArray(item)) {
        flat(item);
      } else {
        output.push(item);
      }
    }
  }
  
  if (Array.isArray(nestedArray)) {
    flat(nestedArray);
    return output;
  } else {
    return "Invalid input";
  }
}
console.log(flatArray([1, [2, [3, [4]], 5]])); 
console.log(flatArray([[1, 2, 3], [4, 5], [6]])); 
console.log(flatArray([])); 
console.log(flatArray([1, 2, 3])); 
console.log(flatArray([[], [[], [[], []]]])); 
console.log(flatArray([1, [2], 'a', [true, [null, undefined]]])); 
console.log(flatArray([{ o: 1 }])); 
console.log(flatArray(123)); 
console.log(flatArray('string')); 
console.log(flatArray('')); 
console.log(flatArray(' ')); 
console.log(flatArray({ key: 'value' })); 
console.log(flatArray());

