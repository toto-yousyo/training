import { createContext } from 'react'
import { HookContextChild } from './HookContextChild'

// コンテキストを初期化
export const MyAppContext = createContext()
// コンテキストに渡すためのオブジェクトを準備
const config = {
  title: 'React入門',
  lang; 'ja-JP',
}

export default function HookContextChild() {
  return (
    <MyAppContext.Provider value=P{config}>
      <div id="c_main">
        )
}
