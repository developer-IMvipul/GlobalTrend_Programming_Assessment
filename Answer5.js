//Write a function that takes an array and returns a new array with duplicates removed.

function distinctArray(arr) {
  if (!Array.isArray(arr)) {
    return "Invalid input";
  }

  const newArray = [];

  for (const i of arr) {
    if (!newArray.includes(i)) {
      newArray.push(i);
    }
  }
  return newArray;
}

