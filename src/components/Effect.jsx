import React, { useEffect, useState } from "react";

function Effect() {
  const sayHello = () => console.log("hello");
  const [number, SetNumber] = useState(0);
  const [aNumber, SetAnumber] = useState(0);
  useEffect(sayHello, []); // render 되었을때 sayHello 실행, []deps에 값이 변할 때 sayHello 실행

  return (
    <div>
      <h1>Hello</h1>

      <button onClick={() => SetNumber(number + 1)}>{number}</button>
      <button onClick={() => SetAnumber(aNumber + 1)}>{aNumber}</button>
    </div>
  );
}

export default Effect;
