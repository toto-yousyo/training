import { useReducer } from "react";

type Action = 
  | { type:  'PLUS'; step: number } 
  | { type:  'MINUS'; step: number } 
  | { type: 'RESET' };

export default function MyReducer() {
  //a. State の初期値を設定
  const [state, dispatch] = useReducer(
    (state: { count: number }, action: Action) => {
      //a. アクションの種類に応じて処理を分岐
    switch (action.type) {
      case 'PLUS':
          return { count: state.count + action.step }
      case 'MINUS':
          return { count:state.count - action.step }
      case 'RESET':
        return { count: 0}
      default:
        return state
      }
    }, 
    {
    count:0
    }
  )

  //c count値をインクリメント（イベントハンドラー）
  function increment() {
    dispatch({ type: 'PLUS', step: 5})
  }

  function decrement() {
    dispatch({ type: 'MINUS', step:  5})
  }

  function reset() {
    dispatch({ type: 'RESET' })
  }

  return (
    <>
      <input type="button" value="カウントアップ" onClick={increment} />
      <input type="button" value="カウントダウン" onClick={decrement} />
      <input type="button" value="リセット" onClick={reset} />
      {/*  b. countの値をページに反映 */}
      <p>{state.count}回、クリックされました</p>
    </>
  );
}
