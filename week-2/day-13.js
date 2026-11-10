let restaurants = [
  { id: 1, name: "서울김밥", category: "한식" },
  { id: 2, name: "도쿄라멘", category: "일식" },
  { id: 3, name: "서울파스타", category: "양식" },
];

function renderRestaurants() {
  const list = document.querySelector("#restaurantList");
  list.replaceChildren();

  for (let i = 0; i < restaurants.length; i++) {
    const restaurant = restaurants[i];

    // 식당 리스트 추가
    const item = document.createElement("li");
    item.textContent = restaurant.name;
    list.append(item);

    // 개별 삭제 버튼 추가
    const button = document.createElement("button");
    button.textContent = "삭제";
    item.append(button);

    // 클릭 시 삭제 로직
    button.addEventListener("click", () => {
      const deletedId = restaurant.id;
      restaurants = restaurants.filter((restaurant) => restaurant.id !== deletedId);
      renderRestaurants();
    });
  }
}

renderRestaurants();
