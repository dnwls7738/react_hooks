import React, { useRef, useEffect } from "react";

const useClick = (onClick) => {
  const element = useRef();

  // mouse hover
  // useEffect(() => {
  //   if (typeof onClick !== "function") {
  //      return;
  //    }
  //   if (elelment.current) {
  //     elelment.current.addEventListener("mouseenter", onClick);
  //   }
  //   return () => {
  //     if (elelment.current) {
  //       elelment.current.removeEventListener("mouseenter", onClick);
  //     }
  //   };
  // }, []);

  // mouse Click
  useEffect(() => {
    if (typeof onClick !== "function") {
      return;
    }
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }
    return () => {
      if (element.current) {
        element.current.removeEventListener("click", onClick);
      }
    };
  }, []);
  return typeof onClick !== "function" ? undefined : element;
};

function Click() {
  const sayHello = () => {
    console.log("sayHello");
  };
  const title = useClick(sayHello);
  return (
    <div>
      <h1 ref={title}>Hi</h1>
    </div>
  );
}

export default Click;
