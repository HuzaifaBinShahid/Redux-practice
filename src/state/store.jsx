import { applyMiddleware, createStore } from 'redux';
import {thunk }from 'redux-thunk'; // Importing 'thunk' directly

import reducers from './reducer';

export const store = createStore(reducers, {}, applyMiddleware(thunk));
