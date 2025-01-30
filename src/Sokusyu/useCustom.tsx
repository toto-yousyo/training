import { useReducer } from 'react'

//a.カスタムフックを定義
export default function useCustom(init) {
  //b.Reducer (dispatch), State, を準備
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'PLUS':
        return { count: state.count + action.step };
      case 'MINUS':
        return { count: state.count - action.step }
      case 'RESET'
        return { count: init };
      default:
        return state
    }
  }, {
    count: init
  })
  //Action呼び出しのための関数’
  function increment() {
    dispatch({ type: 'PLUS', step: 5 })
  }
  function decrement() {
    dispatch({ type: 'MINUS', step: 5 })
  }
  function reset() {
    dispatch({ type: 'RESET' })
  }
  // C.呼び出し元で利用したい情報
  return { state, increment, decrement, reset }

}
