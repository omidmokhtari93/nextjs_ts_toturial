import { Action, applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk, { ThunkMiddleware } from "redux-thunk";
import { rootReducer, rootState } from "./reducers";

export interface dispatchAction extends Action {
  payload: rootState;
}

const middleware = thunk as ThunkMiddleware<rootState, dispatchAction>;

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(middleware))
);

export type AppDispatch = typeof store.dispatch;
