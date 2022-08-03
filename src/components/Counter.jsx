import React, { useState, useEffect } from "react";

function Counter({ counter, setCounter }) {
  const onClickFunc = () => {
    setCounter(counter + 1);
  };
  const [searchWord, setSearchWord] = useState("");

  const onChange = (e) => {
    setSearchWord(e.target.value);
  };

  useEffect(() => {
    // API 호출 코드
    console.log("API호출");
  }, []);
  // 검색시 호출
  useEffect(() => {
    console.log("change input");
  }, [searchWord]);

  useEffect(() => {
    console.log(counter);
  }, [counter]);

  // useEffect(()=>{},[]); 기본 구조

  return (
    <div>
      <input
        type={"text"}
        onChange={onChange}
        value={searchWord}
        placeholder="검색"
      />
      <div>{counter}번 클릭했습니다.</div>
      <button onClick={onClickFunc}>+</button>
    </div>
  );
}

export default Counter;
