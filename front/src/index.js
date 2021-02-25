import React from "react";
import ReactDOM from "react-dom";
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import Main from "./Main";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route path="/" component={Main} />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
