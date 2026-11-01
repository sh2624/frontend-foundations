// 읽기 쉽고 테스트하기 좋은 코드 작성
const cart = [
  { id: 1, name: "키보드", price: 50000, quantity: 2 },
  { id: 2, name: "마우스", price: 20000, quantity: 1 },
  { id: 3, name: "USB", price: 10000, quantity: 3 },
];

function getDiscount(subtotal, couponRate) {
  return Math.floor(subtotal * couponRate);
}

function calculateOrder(cart, couponRate) {
  const subtotal = cart.filter((item) => item.quantity > 0).reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discount = getDiscount(subtotal, couponRate);
  const afterDiscount = subtotal - discount;
  const shippingFee = afterDiscount >= 50000 || subtotal === 0 ? 0 : 3000;
  const total = afterDiscount + shippingFee;

  return { subtotal, discount, shippingFee, total };
}

function testCalculateOrder() {
  // 일반 주문: 할인이 정상 적용되고 배송비까지 정확한가?
  const ordinaryCart = [
    { id: 1, name: "키보드", price: 50000, quantity: 2 },
    { id: 2, name: "마우스", price: 20000, quantity: 1 },
    { id: 3, name: "USB", price: 10000, quantity: 3 },
  ];
  const ordinaryResult = calculateOrder(ordinaryCart, 0.1);
  console.assert(ordinaryResult.discount === 15000 && ordinaryResult.shippingFee === 0, "할인 또는 배송비 계산 오류");

  // 경계값: 할인 후 금액이 정확히 50,000원이면 무료배송인가?
  const boundaryCart = [{ id: 1, name: "키보드", price: 100000, quantity: 1 }];
  const boundaryResult = calculateOrder(boundaryCart, 0.5);
  console.assert(boundaryResult.shippingFee === 0, "무료배송 로직 계산 오류");

  // 유효 상품 없음: 수량이 모두 0 이하인 경우 모든 금액이 0인가?
  const emptyCart = [
    { id: 1, name: "키보드", price: 50000, quantity: 0 },
    { id: 2, name: "마우스", price: 20000, quantity: 0 },
    { id: 3, name: "USB", price: 10000, quantity: 0 },
  ];
  const emptyResult = calculateOrder(emptyCart, 0.1);
  console.assert(
    emptyResult.subtotal === 0 &&
      emptyResult.discount === 0 &&
      emptyResult.shippingFee === 0 &&
      emptyResult.total === 0,
    "수량 계산 오류",
  );

  // 원본 불변성: 함수 호출 전후 장바구니 데이터가 변경되지 않았는가?
  const before = structuredClone(ordinaryCart);
  calculateOrder(ordinaryCart, 0.5);
  console.assert(JSON.stringify(ordinaryCart) === JSON.stringify(before), "원본 데이터 보존 실패");
}

testCalculateOrder();
