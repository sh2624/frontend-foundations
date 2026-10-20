function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (max < arr[i]) max = arr[i];
  }

  return max;
}

console.log(findMax([3, 7, 2, 9, 5])); // 9
console.log(findMax([10, 4, 8])); // 10
console.log(findMax([-5, -2, -8])); // -2
console.log(findMax([6])); // 6

function insertNumber(arr, index, value) {
  arr.splice(index, 0, value);
}

const numbers = [10, 20, 30];

insertNumber(numbers, 1, 99);

console.log(numbers); // [10, 99, 20, 30]

const restaurants = [
  { name: "식당A", isOpen: true },
  { name: "식당B", isOpen: false },
  { name: "식당C", isOpen: true },
  { name: "식당D", isOpen: false },
];

function getOpenRestaurants(restaurants) {
  let open = [];
  for (let i = 0; i < restaurants.length; i++) {
    if (restaurants[i].isOpen) open.push(restaurants[i]);
  }

  return open;
}

console.log(getOpenRestaurants(restaurants));
// [
//   { name: "식당A", isOpen: true },
//   { name: "식당C", isOpen: true }
// ]
