import { useContext } from "react";
import MyAppContext from "./MyAppContext";

export default function MyCount3() {
  const { count, setCount } = useContext(MyAppContext);
  console.log("MyCount3 is updated");
  return (
    <div className="border">
      MyCount3
      <div>
        <input
          type="button"
          value="カウント"
          onClick={() => setCount(count + 1)}
        />
        <p>{count}回、クリックされました</p>
      </div>
    </div>
  );
}
