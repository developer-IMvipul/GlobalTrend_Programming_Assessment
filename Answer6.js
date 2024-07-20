//Write a function that takes a string and capitalizes the first letter of each word in the string.

function capitalize(str) {
  if (typeof str !== "string") {
    return "Invalid input(input must be string)";
  }

  const arr = str.split(" ");
  let capitalize_arr = [];

  for (let i = 0; i < arr.length; i++) {
    let word = arr[i];
    if (word.length > 0) {
      word = word[0].toUpperCase() + word.slice(1);
    }
    capitalize_arr.push(word);
  }
  return capitalize_arr.join(" ");
}

