import { useRef } from "react";

export default function StateFormUC() {
  const name = useRef(null);
  const age = useRef(null);

  const show = () => {
    console.log(`Hello ${name.current.value} ${age.current.value} 歳さん`);
  };

  return (
    <form>
      <div>
        <label htmlFor="name">name: </label>
        <input
          id="name"
          name="name"
          type="text"
          ref={name}
          defaultValue="sato"
        />
      </div>
      <div>
        <label htmlFor="age">age: </label>
        <input id="age" name="age" type="number" ref={age} defaultValue="18" />
      </div>
      <div>
        <button type="button" onClick={show}>
          送信
        </button>
      </div>
    </form>
  );
}
