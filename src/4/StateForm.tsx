import { useState } from "react";

export default function StateForm() {
  const [form, setForm] = useState({
    //nameとageを、formのname属性は一致させておく
    name: "raos yamada",
    age: 18,
  });

  const handleForm = (e) => {
    setForm({
      ...form, //name: form.name,  age: form.ageのこと
      //e.target.name(要素名)をそのままproparty名としてe.target.valueに渡す
      [e.target.name]: e.target.value,
      //新しいプロパティー値を、元々のフォーム値(...form)にマージしStateに書き戻す
    });
  };
  // ここでフォーム要素とStateの同期が完了

  const show = () => {
    console.log(`Hello ${form.name} ${form.age} 歳さん`);
  };

  return (
    <form>
      <div>
        <label htmlFor="name">name: </label>
        <input
          id="name"
          name="name"
          type="text"
          onChange={handleForm}
          value={form.name}
        />
      </div>
      <div>
        <label htmlFor="age">age: </label>
        <input
          id="age"
          name="age"
          type="number"
          onChange={handleForm}
          value={form.age}
        />
      </div>
      <div>
        <button type="button" onClick={show}>
          送信
        </button>
      </div>
      <p>
        こんにちは、{form.name} ({form.age}歳さん！
      </p>
    </form>
  );
}
