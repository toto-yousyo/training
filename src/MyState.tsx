import { useState } from "react";

export default function MyState() {
  //a. State の初期値を設定
  const [count, setCount] = useState(0);
  //c count値をインクリメント（イベントハンドラー）
  function increment() {
    setCount(count + 1);
  }
  return (
    <>
      <input type="button" value="カウント" onClick={increment} />
      {/*  b. countの値をページに反映 */}
      <p>{count}回、クリックされました</p>
    </>
  );
}
