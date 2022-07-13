import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import SimpleModal from "./lib/SimpleModal/SimpleModal";

import { Provider } from "react-redux";
import { store } from "./context/store";
import { BrowserRouter } from "react-router-dom";
import { MotionConfig } from "framer-motion";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <MotionConfig reducedMotion="user">
          <App />
        </MotionConfig>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
