import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App1 from "./App121.jsx";
import Context from "./components/context/Context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Context>
      <App1 />
    </Context>
  </React.StrictMode>
);
