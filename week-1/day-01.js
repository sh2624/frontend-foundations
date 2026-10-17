function swapFirstLast(str) {
  return str.length <= 1 ? str : str[str.length - 1] + str.slice(1, str.length - 1) + str[0];
}

console.log(swapFirstLast("hello")); // "oellh"
console.log(swapFirstLast("abc")); // "cba"
console.log(swapFirstLast("a")); // "a"

function swapChars(str, a, b) {
  return a === b ? str : str.slice(0, a) + str[b] + str.slice(a + 1, b) + str[a] + str.slice(b + 1);
}

console.log(swapChars("hello", 0, 4)); // "oellh"
console.log(swapChars("abcde", 1, 3)); // "adcbe"
console.log(swapChars("hello", 2, 2)); // "hello"
