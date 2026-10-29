// 실전 데이터 처리와 테스트 설계
const products = [
  { id: 1, name: "키보드", category: "전자기기", price: 50000, stock: 5 },
  { id: 2, name: "마우스", category: "전자기기", price: 20000, stock: 0 },
  { id: 3, name: "책상", category: "가구", price: 150000, stock: 3 },
  { id: 4, name: "의자", category: "가구", price: 80000, stock: 2 },
  { id: 5, name: "모니터", category: "전자기기", price: 200000, stock: 1 },
];

function getProducts(products, category, maxPrice) {
  const result = products
    .filter((product) => product.category === category && product.price <= maxPrice && product.stock > 0)
    .map((product) => ({ id: product.id, name: product.name, price: product.price }))
    .sort((a, b) => a.price - b.price);

  return result;
}

// 가격 오름차순으로 정렬되는가?
const result1 = getProducts(products, "가구", 200000);
console.assert(result1[0].price === 80000, "가격 오름차순 정렬 실패");

// 가격이 maxPrice와 정확히 같으면 결과에 포함되는가?
const result2 = getProducts(products, "가구", 80000);
console.assert(result2[0].price === 80000, "maxPrice 범위 계산 실패");

// 원본 배열과 내부 객체가 변경되지 않는가?
const before = structuredClone(products);
const result3 = getProducts(products, "가구", 200000);
console.assert(JSON.stringify(products) === JSON.stringify(before), "원본 데이터 보존 실패");
