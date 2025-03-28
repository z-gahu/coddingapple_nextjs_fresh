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
      {상품.map(() => {
        return (
          <div className="food">
            <h4>{상품[0]} $40</h4>
          </div>
        );
      })}
    </div>
  );
}
