import Image from "next/image";
// import 이미지 from "./food0.png";

export default function List() {
  let 상품 = ["Tomatoes", "Pasta", "Coconut"];
  // let 어레이 = [2, 3, 4];
  // let result = 어레이.map((a, i) => {
  //   console.log(a, i);
  //   return 10;
  // });
  // console.log(result);

  return (
    <div>
      <h2>Products</h2>
      {상품.map((item, i) => {
        return (
          <div className="food" key={i}>
            <img src={`/food${i}.png`} alt={item} className="food-img" />
            <h4>{item} $40</h4>
          </div>
        );
      })}
    </div>
  );
}
