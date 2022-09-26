import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Theme from "./theme/Theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Theme>
    <App />
  </Theme>
);
