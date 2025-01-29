import { useActionData, Form } from "react-router-dom";

export default function MyBookPost() {
  const errs = useActionData();
  const e_title = errs?.get("title");
  const e_price = errs?.get("price");
  return (
    <Form method="POST">
      <div>
        <label>
          署名：
          <input name="title" type="text" size="30" />
          {e_title && <span>{e_title}</span>}
        </label>
      </div>
      <div>
        <label>
          価格：
          <input name="price" type="number" />円
          {e_price && <span>{e_price}</span>}
        </label>
      </div>
      <div>
        <button type="submit">登録</button>
      </div>
    </Form>
  );
}
