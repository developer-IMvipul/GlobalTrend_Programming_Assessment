//Write a function that converts a given string to title case (capitalizing the first letter of each word).

function toTitleCase(str) {
  if (typeof str !== "string") {
    return "Invalid input(input must be string)";
  }

  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

