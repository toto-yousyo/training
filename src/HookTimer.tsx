import { useEffect, useState } from "react";
export default function HookTimer({ init }) {
  const [count, setCount] = useState(init);

  useEffect(() => {
    //タイマーを準備
    const t = setInterval(() => {
      setCount((c) => c - 1);
    }, 1000);
    // コンポーネント破棄時にタイマーを破棄
    return () => {
      clearInterval(t);
    };
  }, []);
  /* カウンターが０未満になった場合、style warnを適用 */
  return (
    <div className={count < 0 ? "font-bold text-red-500" : ""}>
      現在のカウント: {count}
    </div>
  );
}
