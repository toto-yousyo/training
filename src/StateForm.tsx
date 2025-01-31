import { useState } from "react";

export default function StateForm() {
  const [form, setForm] = useState({
    name: "raos yamada",
    age: 18,
  });

  const handleForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const show = () => {
    console.log(`Hello ${form.name} ${form.age} 歳さん`);
  };

  return (
    <form>
      <div>
        <label htmlFor="name">name: </label>
        <input
          id="name"
          name="age"
          type="text"
          onChange={handleForm}
          value={form.name}
        />
      </div>
      <div>
        <label htmlFor="name">age: </label>
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
