import { useState } from "react";
import MyChild from "./MyChild";

export default function MyParent() {
  //カウント合計sumを初期化(初期値は0)
  const [sum, setSum] = useState(0);
  //a.State値(sum)を更新するupdate関数
  function update() {
    setSum(sum + 1);
  }
  return (
    <>
      {/*b.update関数を子コンポーネントに引き渡す*/}
      <MyChild onUpdate={update} />
      <MyChild onUpdate={update} />
      <p>現在のカウント合計: {sum}</p>
    </>
  );
}
