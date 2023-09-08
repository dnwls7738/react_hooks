import React, { useRef } from "react";

const useFullscreen = () => {
  const element = useRef();
  const triggerFull = () => {
    if (element.current) {
      element.current.requestFullscreen();
    }
  };
  const exitFull = () => {
    document.exitFullscreen();
  };
  return { element, triggerFull, exitFull };
};
function Fullscreen() {
  const { element, triggerFull, exitFull } = useFullscreen();
  return (
    <div style={{ height: "100vh" }}>
      <div ref={element}>
        <img src="https://images.unsplash.com/photo-1680188591202-22a2f6d7d6af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=740&q=80" />
        <button onClick={exitFull}>exit fullscreen</button>
      </div>
      <button onClick={triggerFull}>Make fullscreen</button>
    </div>
  );
}

export default Fullscreen;
