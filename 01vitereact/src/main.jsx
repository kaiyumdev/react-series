/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.jsx'
import "./index.css";

// const reactElement = {
//   type: "a",
//   props: {
//     href: "https://google.com",
//     target: "_blank",
//   },
//   children: "Click me to visit google",
// };

const anotherElement = (
  <a style={{ color: "red" }} href="https://google.com" target="_blank">
    Visit Google
  </a>
);

const anotherUser = "chai aur react";

const reactElement = React.createElement(
  "a",
  {
    href: "https://google.com",
    target: "_blank",
  },
  "Click me to visit Google",
  anotherUser
);

ReactDOM.createRoot(document.getElementById("root")).render(reactElement);
// reactElement
