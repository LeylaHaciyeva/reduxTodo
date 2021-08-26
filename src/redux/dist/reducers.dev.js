"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reducers = void 0;

var _actions = require("./actions");

var _state = require("./state");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var reducers = function reducers() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _state.todos;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var newTodo;

  switch (action.type) {
    case _actions.DELETE:
      return state.filter(function (todo) {
        return todo.id !== action.payload;
      });

    case _actions.ADD_TODO:
      newTodo = action.payload;
      return [].concat(_toConsumableArray(state), [newTodo]);

    case _actions.UPDATE:
      newTodo = _toConsumableArray(state);
      var index = -1;

      for (var i = 0; i < newTodo.length; i++) {
        index++;

        if (newTodo[i].id === action.payload.id) {
          break;
        }
      }

      if (index !== -1) {
        newTodo[index] = action.payload;
        return newTodo;
      }

      break;

    default:
      return state;
  }
};

exports.reducers = reducers;