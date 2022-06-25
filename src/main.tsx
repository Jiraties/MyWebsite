import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import SimpleModal from "./lib/SimpleModal/SimpleModal";

import { Provider } from "react-redux";
import { store } from "./context/store";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <SimpleModal>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </SimpleModal>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
