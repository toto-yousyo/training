import { useState } from "react";

export default function FormList() {
  //Stateを初期化
  const [form, setForm] = useState({
    animal: ["dog", "hamster"],
  });
  //リストボックスの変更時に入力値をStateに反映
  const handleFormList = (e) => {
    // 選択値を格納するための配列
    const data = [];
    // <option>要素を順に走査し、選択状態にある値を配列に追加
    const opts = e.target.options;
    for (const opt of opts) {
      if (opt.selected) {
        data.push(opt.value);
      }
    }
    // 最終的な結果をStateに反映
    setForm({
      ...form,
      [e.target.name]: data,
    });
  };

  //最終的な結果をStateに反映
  const show = () => {
    console.log(`好きな動物：${form.animal}`);
  };

  return (
    <form>
      <label htmlFor="animal">好きな動物: </label>
      <br />
      <select
        id="animal"
        name="animal"
        value={form.animal}
        size="4"
        multiple={true}
        onChange={handleFormList}
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
