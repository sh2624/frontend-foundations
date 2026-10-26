const restaurants = [
  { name: "A", rating: 4.5 },
  { name: "B", rating: 3.8 },
  { name: "C", rating: 4.2 },
];

function removeRestaurant(restaurants, targetName) {
  let removed = null;
  for (let i = 0; i < restaurants.length; i++) {
    if (restaurants[i].name === targetName) {
      removed = restaurants.splice(i, 1);
      break;
    }
  }

  return removed !== null ? removed[0] : removed;
}

const removed = removeRestaurant(restaurants, "B");

console.log(restaurants);
// [
//   { name: "A", rating: 4.5 },
//   { name: "C", rating: 4.2 }
// ]

console.log(removed);
// { name: "B", rating: 3.8 }

const restaurants = [
  { name: "A", rating: 4.5 },
  { name: "B", rating: 3.8 },
  { name: "C", rating: 4.2 },
];

function removeRestaurantImmutable(restaurants, targetName) {
  let result = [];
  for (let i = 0; i < restaurants.length; i++) {
    if (restaurants[i].name !== targetName) result.push(restaurants[i]);
  }

  return result;
}

const result = removeRestaurantImmutable(restaurants, "B");

console.log(result);
// [
//   { name: "A", rating: 4.5 },
//   { name: "C", rating: 4.2 }
// ]

console.log(restaurants);
// [
//   { name: "A", rating: 4.5 },
//   { name: "B", rating: 3.8 },
//   { name: "C", rating: 4.2 }
// ]

const restaurants = [
  { name: "A", rating: 4.5 },
  { name: "B", rating: 3.8 },
  { name: "C", rating: 4.2 },
];

function updateRating(restaurants, targetName, newRating) {
  let result = [];
  for (let i = 0; i < restaurants.length; i++) {
    if (restaurants[i].name !== targetName) {
      result.push(restaurants[i]);
    } else {
      let copied = { ...restaurants[i] };
      copied.rating = newRating;
      result.push(copied);
    }
  }

  return result;
}

const updated = updateRating(restaurants, "B", 4.9);

console.log(updated);
// [
//   { name: "A", rating: 4.5 },
//   { name: "B", rating: 4.9 },
//   { name: "C", rating: 4.2 }
// ]

console.log(restaurants[1].rating); // 3.8

const cart = [
  { id: 1, name: "사과", quantity: 2 },
  { id: 2, name: "바나나", quantity: 3 },
  { id: 3, name: "우유", quantity: 1 },
];

function updateQuantity(cart, targetId, amount) {
  let result = [];
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].id === targetId) {
      const copied = { ...cart[i] };
      copied.quantity += amount;
      if (copied.quantity > 0) result.push(copied);
    } else {
      result.push(cart[i]);
    }
  }

  return result;
}

const updated = updateQuantity(cart, 2, 2);

console.log(updated);
// [
//   { id: 1, name: "사과", quantity: 2 },
//   { id: 2, name: "바나나", quantity: 5 },
//   { id: 3, name: "우유", quantity: 1 }
// ]

console.log(cart[1].quantity); // 3
