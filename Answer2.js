//Write a function that takes a string input representing a simple arithmetic expression (only addition and subtraction) and returns the result.

function arithmeticExpression() {
  const exp = prompt(
    "Please input arithmetic expression in the format number1+number2 OR number1-number2"
  );
  console.log(exp);
  const regex = /\+|\-/;
  const isTrue = regex.test(exp);
  if (isTrue) {
    const operation = exp.match(regex).toString();
    const arr = exp.split(operation);
    const num1 = Number(arr[0].trim());
    const num2 = Number(arr[1].trim());
    if (isNaN(num1) || isNaN(num2)) {
      return `invalid input`;
    } else {
      if (operation === "+") {
        return num1 + num2;
      }
      if (operation === "-") {
        return num1 - num2;
      }
    }
  } else {
    return `invalid input`;
  }
}
console.log(arithmeticExpression());

