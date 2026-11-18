let restaurants = [
  { id: 1, name: "서울김밥" },
  { id: 2, name: "도쿄라멘" },
  { id: 3, name: "서울파스타" },
];

let nextId = 4;

// 식당 목록 렌더링
function renderRestaurants() {
  const list = document.querySelector("#restaurantList");
  list.replaceChildren();

  for (let i = 0; i < restaurants.length; i++) {
    const restaurant = restaurants[i];

    const item = document.createElement("li");
    item.textContent = restaurant.name;

    const button = document.createElement("button");
    button.textContent = "삭제";

    // TODO 1: 버튼에 식당 ID 저장
    button.dataset.id = restaurant.id;

    item.append(button);
    list.append(item);
  }
}

// 식당 삭제
function setupDeleteEvents() {
  const list = document.querySelector("#restaurantList");

  list.addEventListener("click", (event) => {
    if (event.target.tagName !== "BUTTON") return;

    // 클릭한 버튼의 식당 ID 가져오기
    const deletedId = Number(event.target.dataset.id);

    // filter()로 해당 식당 삭제
    restaurants = restaurants.filter((restaurant) => restaurant.id !== deletedId);

    // 화면 다시 렌더링
    renderRestaurants();
  });
}

// 식당 추가
function setupAddEvents() {
  const input = document.querySelector("#restaurantInput");
  const addBtn = document.querySelector("#addBtn");

  addBtn.addEventListener("click", () => {
    const restaurantName = input.value.trim(); // 앞뒤 공백 제거
    if (!restaurantName) return;

    const newRestaurant = { id: nextId, name: restaurantName };
    restaurants = [...restaurants, newRestaurant];
    nextId++;

    renderRestaurants();
    input.value = ""; // 입력창 비우기
  });
}

renderRestaurants();
setupDeleteEvents();
setupAddEvents();
