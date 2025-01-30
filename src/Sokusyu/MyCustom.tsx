import useCustom from "./useCustom";

export default function MyCustom() {
  //a. カスタムフックuseCustomから再利用可能な情報を取得
  const [state, increment, decrement, reset] = useCustom(0);
  //b.コンポーネントの最終的な出力
  return (
    <>
      <input type="button" value="カウントアップ" onClick={increment} />
      <input type="button" value="カウントダウン" onClick={decrement} />
      <input type="button" value="リセット" onClick={reset} />
      <p>{state.count} 回、クリックされました</p>
    </>
  );
}
