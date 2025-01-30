import { MyAppProvider } from "./MyAppContext";
import MyCount2 from "./MyCount2";

export default function MyCount1() {
  return (
    <MyAppProvider>
      <div className="w-400 border border-amber-500">
        MyCount1
        <MyCount2 />
      </div>
    </MyAppProvider>
  );
}
