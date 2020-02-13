import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import moviesReducer from "./reducers/movies.reducer.js";
import reduxThunk from "redux-thunk";

let reducers = combineReducers({ movies: moviesReducer });
let mw = applyMiddleware(reduxThunk);
const store = createStore(reducers, {}, mw);
window.store = store;

export default store;
