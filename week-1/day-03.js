function removeChar(str, target) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== target) newStr += str[i];
  }

  return newStr;
}

console.log(removeChar("banana", "a")); // "bnn"
console.log(removeChar("hello", "l")); // "heo"
console.log(removeChar("apple", "z")); // "apple"
console.log(removeChar("", "a")); // ""

function isEven(n) {
  return n % 2 === 0;
}

function countEven(arr) {
  let cnt = 0;
  for (let i = 0; i < arr.length; i++) {
    if (isEven(arr[i])) cnt++;
  }

  return cnt;
}

console.log(countEven([1, 2, 3, 4, 5, 6])); // 3
console.log(countEven([1, 3, 5])); // 0
console.log(countEven([2, 4, 8, 10])); // 4
console.log(countEven([])); // 0
