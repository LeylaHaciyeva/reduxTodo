"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.store = void 0;

var _redux = require("redux");

var _reducers = require("./reducers");

var store = (0, _redux.createStore)(_reducers.reducers, JSON.parse(localStorage.getItem("reduxStore")));
exports.store = store;