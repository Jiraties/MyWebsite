import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./context/store";
import SimpleModal from "./lib/SimpleModal/SimpleModal";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <SimpleModal>
        <App />
      </SimpleModal>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
