// 식당 검색 기능 독립 구현
const restaurants = [
  { id: 1, name: "서울김밥", category: "한식", rating: 4.5, reviewCount: 120, isOpen: true },
  { id: 2, name: "도쿄라멘", category: "일식", rating: 4.8, reviewCount: 80, isOpen: true },
  { id: 3, name: "서울돈까스", category: "일식", rating: 4.2, reviewCount: 200, isOpen: false },
  { id: 4, name: "부산국밥", category: "한식", rating: 4.8, reviewCount: 150, isOpen: true },
  { id: 5, name: "서울파스타", category: "양식", rating: 4.6, reviewCount: 90, isOpen: true },
  { id: 6, name: "제주김밥", category: "한식", rating: 4.5, reviewCount: 60, isOpen: true },
];

// 카테고리 필터링
function filterCategory(restaurants, category) {
  if (category === "all") return restaurants;
  else return restaurants.filter((restaurant) => restaurant.category === category);
}

// 정렬 기준과 동점 처리 구현`
function sortRestaurants(restaurants, sortBy) {
  const copied = [...restaurants];
  return copied.sort((a, b) => {
    if (sortBy === "rating") {
      if (a.rating !== b.rating) return b.rating - a.rating;
      return a.name.localeCompare(b.name); // 평점이 같다면 이름 오름차순
    }

    if (sortBy === "reviews") {
      if (a.reviewCount !== b.reviewCount) return b.reviewCount - a.reviewCount;
      return a.name.localeCompare(b.name); // 리뷰 수가 같다면 이름 오름차순
    }
  });
}

// 검색 조건 필터링 후 정렬
function searchRestaurants(restaurants, options) {
  const filteredName = restaurants.filter((restaurant) => restaurant.name.includes(options.keyword.trim()));
  const filteredCategory = filterCategory(filteredName, options.category);
  const sorted = sortRestaurants(filteredCategory, options.sortBy);

  return sorted.filter((restaurant) => {
    if (options.openOnly === false) {
      return restaurant.rating >= options.minRating;
    } else {
      return restaurant.isOpen && restaurant.rating >= options.minRating;
    }
  });
}

// 테스트
function testSearchRestaurants() {
  // 테스트 A: 평점 정렬
  const resultA = searchRestaurants(restaurants, {
    keyword: "서울",
    category: "all",
    openOnly: true,
    minRating: 4.0,
    sortBy: "rating",
  });
  const expectedA = [
    {
      id: 5,
      name: "서울파스타",
      category: "양식",
      rating: 4.6,
      reviewCount: 90,
      isOpen: true,
    },
    {
      id: 1,
      name: "서울김밥",
      category: "한식",
      rating: 4.5,
      reviewCount: 120,
      isOpen: true,
    },
  ];
  console.assert(JSON.stringify(expectedA) === JSON.stringify(resultA), "평점 정렬 오류");

  // 테스트 B: 리뷰 수 정렬
  const resultB = searchRestaurants(restaurants, {
    keyword: "",
    category: "한식",
    openOnly: false,
    minRating: 4.5,
    sortBy: "reviews",
  });
  const expectedB = [
    {
      id: 4,
      name: "부산국밥",
      category: "한식",
      rating: 4.8,
      reviewCount: 150,
      isOpen: true,
    },
    {
      id: 1,
      name: "서울김밥",
      category: "한식",
      rating: 4.5,
      reviewCount: 120,
      isOpen: true,
    },
    {
      id: 6,
      name: "제주김밥",
      category: "한식",
      rating: 4.5,
      reviewCount: 60,
      isOpen: true,
    },
  ];
  console.assert(JSON.stringify(expectedB) === JSON.stringify(resultB), "리뷰 수 정렬 오류");

  // 테스트 C: 빈 결과
  const resultC = searchRestaurants(restaurants, {
    keyword: "존재하지않는식당",
    category: "all",
    openOnly: false,
    minRating: 0,
    sortBy: "rating",
  });
  console.assert(JSON.stringify([]) === JSON.stringify(resultC), "빈 결과 처리 오류");
}

testSearchRestaurants();
