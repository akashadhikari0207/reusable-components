import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import BadgesApp from "./BadgesApp.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <BadgesApp /> */}
    <BadgesApp />
  </StrictMode>
);
