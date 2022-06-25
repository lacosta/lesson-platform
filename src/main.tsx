// @packages
import React from "react";
import ReactDOM from "react-dom/client";

// @own
import "styles/global.css";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
