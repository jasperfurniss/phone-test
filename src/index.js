import React from "react";
import ReactDOM from "react-dom";

import PhoneInput from "./App";
import "playbook-ui/dist/reset.css";
import "playbook-ui/dist/playbook.css";
import "playbook-ui/dist/fonts/fontawesome-min";
import "playbook-ui/dist/fonts/regular-min";
import "./styles.scss";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <PhoneInput />
  </React.StrictMode>,
  rootElement
);
