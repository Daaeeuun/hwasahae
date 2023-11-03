//로그인 폼
const signUp = document.querySelector(".signUp");
signUp.innerHTML = `    
<form action="" method="">
<div class="form-white">
  <h1 class="title">회원정보 입력</h1>

  <!-- 이름 -->
  <div class="w-100">
    <div>
      <label for="name" class="detail_title">이름</label>
      <input class="form-input" type="text" id="name">
    </div>
  </div>

  <!-- 이메일 -->
  <div class="w-100">
    <div>
      <label for="email" class="detail_title">이메일</label>
      <input class="form-input" type="email" id="email" placeholder="email@naver.com">
      <p id="email-message"></p>
    </div>
  </div>

  <!-- 비밀번호 -->
  <div class="w-100">
    <div>
      <label for="pwd" class="detail_title">비빌번호</label>
      <input class="form-input" type="password" id="pwd">
      <p id="pw-message"></p>
    </div>
  </div>

  <div class="w-100">
    <div>
      <label for="rePwd" class="detail_title">비밀번호 확인</label>
      <input class="form-input" type="password" id="rePwd">
      <p id="confirmPw-message"></p>
    </div>
  </div>

  <!--휴대폰 번호-->
  <div class="w-100">
    <div>
      <label for="rePwd" class="detail_title">휴대폰 번호</label>
      <input type="text" class="form-input" oninput="oninputPhone(this)" maxlength="11" id="phonNumber">
    </div>
  </div>

  <!-- 주소 -->
  <div class="w-100">
    <div>
      <label for="address" class="detail_title">주소</label>
      <div>
        <input type="text" id="sample4_postcode" placeholder="우편번호">
        <input type="button" class="btn" id="addressBtn" onclick="sample4_execDaumPostcode()" value="우편번호 찾기">
        <input type="text" class="address-input" id="sample4_roadAddress" placeholder="도로명주소">
        <input type="text" class="address-input" id="sample4_jibunAddress" placeholder="지번주소">
        <span id="guide" style="color:#999;display:none"></span>
        <input type="text" class="address-input" id="sample4_detailAddress" placeholder="상세주소">
        <input type="text" class="address-input" id="sample4_extraAddress" placeholder="참고항목">
      </div>
    </div>
  </div>

  <!-- 생년월일 -->
  <div class="info" id="info__birth">
    <p class="birth_content detail_title">생년월일</p>
    <select class="box" id="birth-year">
      <option disabled selected>출생 연도</option>
    </select>
    <select class="box" id="birth-month">
      <option disabled selected>월</option>
    </select>
    <select class="box" id="birth-day">
      <option disabled selected>일</option>
    </select>
  </div>

  <div>
    <button type="submit" class="btn" onsubmit="return submit()" id="submit">회원가입</button>
  </div>
</form>
</div>`;
