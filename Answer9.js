//Write a function that filters out even numbers from an array.

function filterArray(arr){
  if (!Array.isArray(arr)) {
    return "Invalid input";
  }
  const filteredArray = arr.filter(num => num%2===0);
  return filteredArray;
}

