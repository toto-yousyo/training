import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import EventPropagation from "./EventPropagation";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <EventPropagation />
  </StrictMode>,
);
