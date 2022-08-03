import React, { useState, useEffect } from "react";

function Counter({ counter, setCounter }) {
  const onClickFunc = () => {
    setCounter(counter + 1);
  };

  console.log("counter");
  useEffect(() => {
    console.log("API호출");
  }, []);

  return (
    <div>
      <div>{counter}번 클릭했습니다.</div>
      <button onClick={onClickFunc}>+</button>
    </div>
  );
}

export default Counter;
