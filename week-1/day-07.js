// STEP 1. Day 6 복습 — 독립 평가
const users = [
  { id: 1, name: "Kim", age: 25, isActive: true },
  { id: 2, name: "Lee", age: 19, isActive: true },
  { id: 3, name: "Park", age: 30, isActive: false },
  { id: 4, name: "Choi", age: 22, isActive: true },
];

function getActiveAdultNames(users) {
  return users.filter((user) => user.age >= 20 && user.isActive).map((user) => user.name);
}

console.log(getActiveAdultNames(users));
// ["Kim", "Choi"]

// STEP 2. reduce() 실습
const cart = [
  { name: "키보드", price: 50000, quantity: 2 },
  { name: "마우스", price: 20000, quantity: 1 },
  { name: "USB", price: 10000, quantity: 3 },
];

function calculateTotal(cart) {
  return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

console.log(calculateTotal(cart)); // 150000
console.log(calculateTotal([])); // 0

// STEP 3. 종합 구현
const orders = [
  { id: 1, category: "전자기기", price: 50000, quantity: 2, status: "paid" },
  { id: 2, category: "식품", price: 10000, quantity: 3, status: "paid" },
  { id: 3, category: "전자기기", price: 20000, quantity: 1, status: "cancelled" },
  { id: 4, category: "전자기기", price: 30000, quantity: 2, status: "paid" },
  { id: 5, category: "식품", price: 5000, quantity: 2, status: "paid" },
];

function calculateCategoryRevenue(orders, targetCategory) {
  return orders
    .filter((item) => item.status === "paid" && item.category === targetCategory)
    .reduce((sum, item) => sum + item.price * item.quantity, 0);
}

console.log(calculateCategoryRevenue(orders, "전자기기"));
// 160000

console.log(calculateCategoryRevenue(orders, "식품"));
// 40000

console.log(calculateCategoryRevenue(orders, "의류"));
// 0
