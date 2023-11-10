// API 정보 가져와 화면에 뿌리는 코드
fetch("http://localhost:3000/users/my", { method: "GET" })
  .then((response) => response.json())
  .then((data) => {
    console.log("data: ", data);
    const myInfoMap = `
      <!-- 이름 -->
      <div class="w-100">
        <div>
          <label for="name" class="detail_title">이름</label>
          <span class="form-input" id="name">${data.name}</span>
        </div>
      </div>
      <!-- 아이디 -->
      <div class="w-100">
        <div>
          <label for="name" class="detail_title">아이디</label>
          <span class="form-input" id="id">${data.id}</span>
        </div>
      </div>
      <!-- 비밀번호 -->
      <div class="w-100">
        <div>
          <label for="name" class="detail_title">비밀번호</label>
          <input class="form-input" type="password" id="pwd">
        </div>
      </div>
      <!-- 비밀번호 확인 -->
      <div class="w-100">
        <div>
          <label for="name" class="detail_title">비밀번호 확인</label>
          <input class="form-input" type="password" id="rePwd">
        </div>
      </div>
      <!-- 이메일 -->
      <div class="w-100">
        <div>
          <label for="email" class="detail_title">이메일</label>
          <input class="form-input" type="email" id="email" placeholder="email@naver.com" value="${data.email}">
          <p class="msg" id="email-message"></p>
        </div>
      </div>
      <!-- 주소 -->
      <div class="w-100">
        <div>
          <label for="address" class="detail_title">주소</label>
          <div>
            <input type="text" id="sample4_postcode" placeholder="" value="${data.zipcode}">
            <input type="button" class="btn" id="addressBtn" onclick="sample4_execDaumPostcode()" value="우편번호 찾기">
            <input type="text" class="address-input" id="sample4_roadAddress" placeholder="" value="${data.address}">
            <input type="text" class="address-input" id="sample4_detailAddress" placeholder="" value="${data.detailAddress}">
          </div>
        </div>
      </div>
    `;

    const productContainer = document.querySelector(".title");
    productContainer.innerHTML = myInfoMap;
  });

// 수정된 함수로 API 요청 수행
const submitForm = (event) => {
  event.preventDefault();
  // console.log("aaa");
  const form = document.querySelector("#userform");

  fetch("http://localhost:3000/users/my", {
    method: "PATCH",
    // body: JSON.stringify(requestBody),
    body: new FormData(form),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("회원 정보 수정 성공:", data);
      // 성공 시 추가적인 로직을 여기에 작성하세요.
      alert("회원 정보가 성공적으로 수정되었습니다.");
    })
    .catch((error) => {
      console.error("회원 정보 수정 실패:", error);
      // 실패 시 추가적인 로직을 여기에 작성하세요.
      alert("회원 정보 수정에 실패했습니다. 다시 시도해주세요.");
    });
};

// 수정 버튼이 눌렸을 때 동작
const submitBtn = document.getElementById("submit");
submitBtn.addEventListener("click", submitForm);
