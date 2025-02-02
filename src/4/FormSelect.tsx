import { useState } from "react";

export default function FormSelect() {
  // Stateを初期化
  const [form, setForm] = useState({
    animal: "dog",
  });

  const handleForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // 送信ボタンクリックで入力値をログ出力
  const show = () => {
    console.log(`好きな動物：${form.animal}`);
  };

  return (
    <form>
      <label htmlFor="animal">好きな動物：</label>
      <select
        id="animal"
        name="animal"
        value={form.animal}
        onChange={handleForm}
      >
        <option value="dog">犬</option>
        <option value="cat">猫</option>
        <option value="hamster">ハムスター</option>
        <option value="rabbit">うさぎ</option>
      </select>
      <button type="button" onClick={show}>
        送信
      </button>
    </form>
  );
}
