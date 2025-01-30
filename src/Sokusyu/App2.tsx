import {NavLink, Outlet } from 'react-router-dom'
import './App.css'

function isCurrent({isActive}){
  return isActive ? `current` : undefined;
}
export default function App() {
  return (
   <>
   <ul>
    <li><NavLink className={ isCurrent } to="/"> Top </NavLink></li>
    <li><NavLink className={ isCurrent } to="/hello">Hello</NavLink></li>
    <li><NavLink className={ isCurrent } to="/article/13">Article No.13</NavLink></li>
    <li><NavLink className={ isCurrent } to="/article/197">Article No.197</NavLink></li>
    <li><NavLink className={ isCurrent } to="/search/react/router">検索結果</NavLink></li>
    <li><NavLink className={ isCurrent } to="/book/978-4-297-13062-6"> 書籍情報</NavLink></li>
    <li><NavLink className={ isCurrent } to="/post">書籍登録</NavLink></li>

  </ul>
  <hr />
  <Outlet />
  </>
  )
}
