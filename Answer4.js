//Write a function that checks if two given strings are anagrams of each other.

function anagrams(str1, str2) {
  console.log(str1, str2);
  if (typeof str1 !== "string" || typeof str2 !== "string") {
    return "Invalid input(input must be string)";
  }

  if (str1.length !== str2.length) {
    return "Given strings are not anagrams(length of two strings is not equal)";
  }

  const newstr1 = str1.toLowerCase();
  const newstr2 = str2.toLowerCase();
  let isTrue = false;

  const arr1 = Array.from(newstr1);
  const arr2 = Array.from(newstr2);

  if (arr1.sort().join() === arr2.sort().join()) {
    return `${str1} and ${str2} are anagrams of each other`;
  } else {
    return `${str1} and ${str2} are not anagrams of each other`;
  }
}

console.log(anagrams("angel", "glean"));
console.log(anagrams(123, 1010));
console.log(anagrams("abcd", "abcde"));
console.log(anagrams("", ""));
console.log(anagrams("angel", "anges"));
console.log(anagrams("aangel", "angell"));

