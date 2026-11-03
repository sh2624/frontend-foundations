const restaurants = [
  { id: 1, name: "서울김밥", category: "한식", rating: 4.5, reviewCount: 120, price: 9000, isOpen: true },
  { id: 2, name: "도쿄라멘", category: "일식", rating: 4.8, reviewCount: 80, price: 12000, isOpen: true },
  { id: 3, name: "서울돈까스", category: "일식", rating: 4.2, reviewCount: 200, price: 11000, isOpen: false },
  { id: 4, name: "부산국밥", category: "한식", rating: 4.8, reviewCount: 150, price: 10000, isOpen: true },
  { id: 5, name: "서울파스타", category: "양식", rating: 4.6, reviewCount: 90, price: 18000, isOpen: true },
  { id: 6, name: "제주김밥", category: "한식", rating: 4.5, reviewCount: 60, price: 8000, isOpen: true },
];

function sortBy(restaurants, sortBy) {
  const copied = [...restaurants];
  return copied.sort((a, b) => {
    if (sortBy === "rating") {
      if (a.rating !== b.rating) return b.rating - a.rating;
      else if (a.price !== b.price) return a.price - b.price;
      return a.name.localeCompare(b.name);
    } else {
      if (a.reviewCount !== b.reviewCount) return b.reviewCount - a.reviewCount;
      else if (a.price !== b.price) return a.price - b.price;
      return a.name.localeCompare(b.name);
    }
  });
}

function recommendRestaurants(restaurants, options) {
  const filtered = restaurants.filter((restaurant) => {
    const matchCategory = options.category === "all" || restaurant.category === options.category;
    const matchPrice = restaurant.price <= options.maxPrice;
    const matchRating = restaurant.rating >= options.minRating;
    const matchOpen = !options.openOnly || restaurant.isOpen;

    return matchCategory && matchPrice && matchRating && matchOpen;
  });

  const sorted = sortBy(filtered, options.sortBy);

  return sorted.slice(0, options.limit);
}

// 테스트
function testRecommendRestaurants() {
  const testRestaurants = [
    { id: 1, name: "제주김밥", category: "한식", rating: 4.5, reviewCount: 120, price: 9000, isOpen: true },
    { id: 2, name: "서울김밥", category: "한식", rating: 4.5, reviewCount: 130, price: 9000, isOpen: true },
  ];

  // 동점 처리: 1차 정렬값과 가격이 같은 식당들의 이름순 정렬
  const resultA = recommendRestaurants(testRestaurants, {
    category: "all",
    maxPrice: 15000,
    minRating: 4.0,
    openOnly: true,
    sortBy: "rating",
    limit: 2,
  });
  const expectedA = [
    { id: 2, name: "서울김밥", category: "한식", rating: 4.5, reviewCount: 130, price: 9000, isOpen: true },
    { id: 1, name: "제주김밥", category: "한식", rating: 4.5, reviewCount: 120, price: 9000, isOpen: true },
  ];
  console.assert(JSON.stringify(resultA) === JSON.stringify(expectedA), "동점 처리 오류");

  // 경계 조건: limit: 0이거나 검색 결과가 없는 경우
  const resultB = recommendRestaurants(testRestaurants, {
    category: "all",
    maxPrice: 15000,
    minRating: 4.0,
    openOnly: true,
    sortBy: "rating",
    limit: 0,
  });
  console.assert(JSON.stringify(resultB) === JSON.stringify([]), "경계 조건 오류");

  // 불변성: 실행 전후 원본 배열 및 객체의 내용이 동일한지
  const before = structuredClone(testRestaurants);
  sortBy(testRestaurants, "reviews");
  console.assert(JSON.stringify(testRestaurants) === JSON.stringify(before), "불변성 오류");
}

testRecommendRestaurants();
