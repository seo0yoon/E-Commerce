import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducers from "./reducers";

const myStore = createStore(rootReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={myStore}>
      <App />
    </Provider>
  </React.StrictMode>
);
