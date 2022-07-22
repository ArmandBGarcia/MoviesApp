import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../redux/reducers";
import thunk from "redux-thunk";

const composeEncharcers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEncharcers(applyMiddleware(thunk))
);

export default store;
