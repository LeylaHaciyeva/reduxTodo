import { createStore } from 'redux';
import {reducers} from './reducers'

export const store = createStore(reducers,JSON.parse(localStorage.getItem("reduxStore")))