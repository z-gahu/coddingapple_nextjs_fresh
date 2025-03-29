import Image from "next/image";
import 이미지0 from "/public/food0.png";
import 이미지1 from "/public/food1.png";
import 이미지2 from "/public/food2.png";

export default function List() {
  let 상품 = ["Tomatoes", "Pasta", "Coconut"];
  // let 어레이 = [2, 3, 4];
  // let result = 어레이.map((a, i) => {
  //   console.log(a, i);
  //   return 10;
  // });
  // console.log(result);

  const imageList = [이미지0, 이미지1, 이미지2];

  return (
    <div>
      <h2>Products</h2>
      {상품.map((item, i) => {
        return (
          <div className="food" key={i}>
            {/* <img src={`/food${i}.png`} alt={item} className="food-img" /> */}
            <Image
              src={imageList[i]}
              alt="item"
              className="food-img"
              // width={500}
              // height={500}
            />
            <h4>{item} $40</h4>
          </div>
        );
      })}
    </div>
  );
}
