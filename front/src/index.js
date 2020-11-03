// el inicio de la app

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from 'react-router-dom';
import {Provider} from 'react-redux'
import Main from "./Main";
import store from './store'
ReactDOM.render(
  <BrowserRouter>
    <Route path="/" component={Main} />
  </BrowserRouter>,
  document.getElementById('root')
);