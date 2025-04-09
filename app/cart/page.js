// 'use client'
// 전부 클라이언트 컴포넌트가 됨

import 작명 from "./data.js";

export default function Cart() {
  let 장바구나 = ["Tomatoes", "Pasta"]; // 함수밖에서는 직접 사용할수없다.
  return (
    <div>
      <h4 className="title">Cart</h4>
      <CartItem item={장바구나[0]} />
      <CartItem item={장바구나[1]} />
      <Banner content="롯데카드" />
      <Banner content="현대카드" />
      <MakeButton boxColor="red" />
      <MakeButton boxColor="blue" />
    </div>
  );
}

function CartItem(props) {
  return (
    <div className="cart-item">
      <p>{props.item}</p>
      <p>$40</p>
      <p>1개</p>
    </div>
  );
}

function Banner(props) {
  return <h5>{props.content} 결제 행사중</h5>;
}

function MakeButton(props) {
  // return <button style={{ backgroundColor: "red" }}>버튼</button>;
  return <button style={{ backgroundColor: props.boxColor }}>버튼</button>;
}
