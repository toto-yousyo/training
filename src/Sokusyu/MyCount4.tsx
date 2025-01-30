import { useContext, useMemo } from "react";
import { MyAppContext } from "./MyAppContext";

export default function MyCount4() {
  const { count2, setCount2 } = useContext(MyAppContext);

  return useMemo(() => {
    console.log("MyCount4 is updatec");
    return (
      <div className="border">
        MyCount4
        <div>
          <input
            type="button"
            value="count2"
            onClick={() => setCount2(count2 + 1)}
          />
          <p>{count2}回クリックされました</p>
        </div>
      </div>
    );
  }, [count2, setCount2]);
}
