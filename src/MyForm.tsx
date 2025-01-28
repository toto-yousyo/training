import { useState } from "react";

export default function MyForm() {
  //a.入力値に関わる値をStateとして初期化
  const [form, setForm] = useState({
    name: "山田太郎",
    email: "tyamada@example.com",
  });
  //c. 入力ボックスの変更をStateに反映
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }
  //d.[送信]ボタンで入力値をログに出力
  function show() {
    console.log(`name: ${form.name}`);
    console.log(`email: ${form.email}`);
  }
  //  フォームを描画
  return (
    <form>
      {/*b.State値を個々のフォーム要素に反映*/}
      <div>
        <label htmlFor="name">名前：</label>
        <input
          id="name"
          name="name"
          type="text"
          onChange={handleChange}
          value={form.name}
        />
      </div>
      <div>
        <label htmlFor="email">メールアドレス：</label>
        <input
          id="email"
          name="email"
          type="mail"
          onChange={handleChange}
          value={form.email}
        />
      </div>
      <div>
        <button type="button" onClick={show}>
          送信
        </button>
      </div>
    </form>
  );
}
