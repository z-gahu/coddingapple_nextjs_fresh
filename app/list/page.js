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
            <h4>{item} $40</h4>
          </div>
        );
      })}
    </div>
  );
}
