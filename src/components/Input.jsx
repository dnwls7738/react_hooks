import React, { useState } from "react";

// useInput은 initialValue, validator를 받음
const useInput = (initialValue, validator) => {
  const [value, Setvalue] = useState(initialValue); // hooks로 부터 initalValye를 useState가 갖게 함
  const onChange = (e) => {
    const {
      target: { value },
    } = e;

    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      Setvalue(value);
    }
  };
  return { value, onChange }; // value, onChange return
};

function Input() {
  const maxLen = (value) => value.length < 10; // validator
  const name = useInput("Mr.", maxLen); // name = value
  return (
    <div>
      <h1>Hello</h1>
      <input placeholder="Name" {...name} />
    </div>
  );
}

export default Input;
