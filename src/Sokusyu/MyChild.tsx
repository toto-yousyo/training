import { useState } from "react";

interface MyChildProps {
  onUpdate: () => void; //必須の関数プロパティ
}

const MyChild: React.FC<MyChildProps> = (props) => {
  //個々のカウント値を管理(初期値は0)
  const [count, setCount] = useState(0);
  //ボタンクリックでカウントアップ
  function increment() {
    setCount(count + 1);
    //c.親コンポーネントのupdate関数を呼び出す
    props.onUpdate();
  }
  return <input type="button" value={count} onClick={increment} />;
};
export default MyChild;
