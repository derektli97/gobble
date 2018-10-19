/* eslint-disable */
import React from "react";
import ReactDOM from "react-dom";
import PageRouter from "Pages/PageRouter";
import { unregister } from "registerServiceWorker";
import "./index.css";

ReactDOM.render(<PageRouter />, document.getElementById("root"));
unregister();
