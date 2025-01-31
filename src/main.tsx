import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import StateForm from "./StateForm";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <StateForm />
  </StrictMode>,
);
