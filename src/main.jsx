import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import User from "./user.jsx";
import Sign_up from "./sign-up.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <Sign_up />
    <User />
  </React.StrictMode>
);
