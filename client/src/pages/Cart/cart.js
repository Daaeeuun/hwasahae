const item_date = {
  id: 1,
  image: "",
  productName: "비타민 C 화이티닝 크림 60g",
  price: 32000,
  deliveryFee: 0,
};

//갯수
let item_su = 1;

//총 상품 가격
let total_price = () => {
  const total_num = item_date.price * item_su;
  return total_num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

//장바구니 폼
const cart = document.querySelector(".cart");
cart.innerHTML = `
<form action="" id="payment-form">
<div class="totalPayment box">
  <span class="title">주문 리스트</span>
  <table class="totalPayment-table">
    <thead>
        <tr>
          <th>상품 이미지</th>
          <th>상품명</th>
          <th>수량</th>
          <th>가격</th>
          <th>삭제</th>
        </tr>
    </thead>
    <tbody id="productTable">
      <tr>
        <td><img src="./img/product_1.jpg" alt="상품 이미지">${item_date.image}</td>
        <td>${item_date.productName}</td>
        <td>
          <button class="minus">-</button>
            <input class="item_many" type="text" value="${item_su}">
          <button class="plus">+</button></td>
        <td><span id="item_total"></span> 원</td>
        <td><button class="deleteBtn" onclick="deleteRow(this)">삭제</button></td>
    </tr>
    </tbody>
  </table>
</div>
</form>
  <div class="btnBox">
    <button class="btn order">주문하기</button>
    <button class="btn shopping">계속 쇼핑하기</button>
    <button class="btn cartDelete">장바구니 비우기</button>
  </div>
  <div style="clear: both;"></div>
</form>`;

//주문 리스트 - 제품수량 증가 및 감소
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const item_many = document.querySelector(".item_many");
const item_total = document.querySelector("#item_total");
item_total.innerHTML = item_date.price
  .toString()
  .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

plus.addEventListener("click", (e) => {
  e.preventDefault();
  item_su = item_su + 1;
  item_many.value = item_su;
  item_total.innerHTML = total_price();
});

minus.addEventListener("click", () => {
  e.preventDefault();
  if (item_many.value === 1) {
    item_many.value = 1;
    return alert("최소수량 입니다");
  }

  item_su = item_su - 1;
  item_many.value = item_su;
  item_total.innerHTML = total_price();
});

//삭제버튼 해당 상품 삭제
function deleteRow(button) {
  let row = button.parentNode.parentNode;
  row.parentNode.removeChild(row);
}

//장바구니 비우기
const cartDelete = document.querySelector(".cartDelete");
cartDelete.addEventListener("click", () => {
  const tbody = document.querySelector("table tbody");
  tbody.parentNode.removeChild(tbody);
});

//주문하기
