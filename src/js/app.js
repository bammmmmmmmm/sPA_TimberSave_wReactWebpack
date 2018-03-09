import React, { Component } from "react";
import ReactDOM from "react-dom";
import Layout from "./components/containers/Layout";
import { Provider } from "react-redux";
import { createStore } from "redux";
import allReducers from "./reducers/combiner";

const store = createStore(allReducers);

const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(
  <Provider store={store}>
    <Layout/>
  </Provider>,
  wrapper
) : false;
