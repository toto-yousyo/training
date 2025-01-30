import { useState } from "react";
import { createPortal } from "react-dom";
import "./App.css";

export default function Portal() {
  //ダイアログの開閉状態を表すstate(default)は閉じた状態でfalse
  const [show, setShow] = useState(false);
  const panelElement = document.getElementById("panel");

  return (
    <form>
      <input
        type="button"
        value="ダイアログ開閉"
        onClick={() => setShow(!show)}
      />
      {/* a.shot値に応じてダイアログを生成 */}
      {show &&
        panelElement &&
        createPortal(
          <div className="panel">
            <p className="h-[500px]">Portal</p>
          </div>,
          panelElement,
        )}
    </form>
  );
}
