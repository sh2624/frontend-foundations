function moveFirstToLast(str) {
  return str.length <= 1 ? str : str.slice(1) + str[0];
}

console.log(moveFirstToLast("hello")); // "elloh"
console.log(moveFirstToLast("abc")); // "bca"
console.log(moveFirstToLast("a")); // "a"
console.log(moveFirstToLast("")); // ""

function getGrade(score) {
  if (score >= 90) return "A";
  else if (score >= 80) return "B";
  else if (score >= 70) return "C";
  else return "F";
}

console.log(getGrade(95)); // "A"
console.log(getGrade(80)); // "B"
console.log(getGrade(73)); // "C"
console.log(getGrade(42)); // "F"

function sumEven(n) {
  let sum = 0;
  for (let i = 2; i <= n; i += 2) sum += i;

  return sum;
}

console.log(sumEven(10)); // 30
console.log(sumEven(5)); // 6
console.log(sumEven(1)); // 0

function countChar(str, target) {
  let cnt = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === target) cnt++;
  }

  return cnt;
}

console.log(countChar("banana", "a")); // 3
console.log(countChar("hello", "l")); // 2
console.log(countChar("apple", "z")); // 0
console.log(countChar("", "a")); // 0
