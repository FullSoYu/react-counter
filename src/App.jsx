import React, { useState } from "react";
import Counter from "./components/Counter";
import Converter from "./components/Converter";
import Mybtn from "./components/Mybtn";

function App() {
  const [counter, setCounter] = useState(0); // useState안에는 최초 상태값을 넣어줌
  return (
    <>
      <Counter counter={counter} setCounter={setCounter} />
      <Converter counter={counter} />
      <hr></hr>
      <Mybtn text={"1번 버튼"} fontSize={"10px"} />
      <Mybtn text={"2번 버튼"} fontSize={"20px"} />
      <Mybtn text={"3번 버튼"} fontSize={"30px"} />
    </>
  );
}

export default App;
