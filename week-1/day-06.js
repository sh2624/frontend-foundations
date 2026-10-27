// function getDiscountedPrices(prices, discountRate) {
//   return prices.map((val) => val * (1 - discountRate));
// }

// console.log(getDiscountedPrices([10000, 20000, 30000], 0.1));
// // [9000, 18000, 27000]

// console.log(getDiscountedPrices([5000, 8000], 0.25));
// // [3750, 6000]

// console.log(getDiscountedPrices([], 0.2));
// // []

// const restaurants = [
//   { name: "A", rating: 4.5, isOpen: true },
//   { name: "B", rating: 4.8, isOpen: false },
//   { name: "C", rating: 3.9, isOpen: true },
//   { name: "D", rating: 4.7, isOpen: true },
// ];

// function getAvailableRestaurants(restaurants, minRating) {
//   return restaurants.filter((val) => val.isOpen && val.rating >= minRating);
// }

// console.log(getAvailableRestaurants(restaurants, 4.0));
// // [
// //   { name: "A", rating: 4.5, isOpen: true },
// //   { name: "D", rating: 4.7, isOpen: true }
// // ]

// const users = [
//   { id: 1, name: "Kim", isActive: true },
//   { id: 2, name: "Lee", isActive: false },
//   { id: 3, name: "Park", isActive: true },
// ];

// function findUserById(users, targetId) {
//   const result = users.find((val) => val.id === targetId);
//   return result === undefined ? null : result;
// }

// console.log(findUserById(users, 3));
// // { id: 3, name: "Park", isActive: true }

// console.log(findUserById(users, 99));
// // null

const products = [
  { id: 1, name: "키보드", price: 50000, inStock: true },
  { id: 2, name: "마우스", price: 20000, inStock: false },
  { id: 3, name: "모니터", price: 200000, inStock: true },
  { id: 4, name: "USB", price: 10000, inStock: true },
];

function getProductSummaries(products, maxPrice) {
  return products
    .filter((product) => product.inStock && product.price <= maxPrice)
    .map((product) => ({ id: product.id, name: product.name }));
}

console.log(getProductSummaries(products, 50000));
// [
//   { id: 1, name: "키보드" },
//   { id: 4, name: "USB" }
// ]
