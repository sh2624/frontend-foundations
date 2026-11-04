function setupGreeting() {
  const input = document.querySelector("#nameInput");
  const button = document.querySelector("#greetBtn");
  const desc = document.querySelector("#result");
  const preview = document.querySelector("#preview");

  button.addEventListener("click", () => {
    const name = input.value.trim();
    const message = name === "" ? "이름을 입력해 주세요." : `안녕하세요, ${name}님!`;

    desc.textContent = message;
  });

  input.addEventListener("input", (event) => {
    const name = event.target.value.trim();
    const message = name === "" ? "입력 중인 이름: 없음" : `입력 중인 이름: ${name}`;

    preview.textContent = message;
  });
}

setupGreeting();
