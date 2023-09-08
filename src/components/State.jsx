import React, { useState } from "react";

function State() {
  const [item, SetItem] = useState(0);
  const increseItem = () => SetItem(item + 1);
  const decreseItem = () => SetItem(item - 1);

  return (
    <div>
      <h1>Hello {item}</h1>

      <button onClick={increseItem}>increseItem</button>
      <button onClick={decreseItem}>decreseItem</button>
    </div>
  );
}

export default State;
