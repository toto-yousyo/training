import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RecoilTodoUp } from "@/4/StateTodo";
import "./index.css";
import { RecoilRoot } from "recoil";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RecoilRoot>
      <RecoilTodoUp />
    </RecoilRoot>
  </StrictMode>,
);
