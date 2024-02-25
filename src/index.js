import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/app";
import "./anime";
import "./moment";
import "./fonts/fonts.scss";
import "./main.scss";

function component(text) {
  const element = document.createElement("h1");
  element.textContent = text;
  return element;
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);
document.body.prepend(component("The project is built on Webpack"));
