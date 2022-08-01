import React, { useState } from "react";
import Counter from "./components/Counter";
import Converter from "./components/Converter";

function App() {
  const [counter, setCounter] = useState(0); // useState안에는 최초 상태값을 넣어줌
  return (
    <>
      <Counter counter={counter} setCounter={setCounter} />
      <Converter counter={counter} />
    </>
  );
}

export default App;
