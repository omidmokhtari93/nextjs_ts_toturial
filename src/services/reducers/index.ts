import { combineReducers } from "redux";
import { langReducer, langState } from "./changeLang";

export const rootReducer = combineReducers({
  app: langReducer,
});

export interface rootState extends langState {}

export type rootStateType = ReturnType<typeof rootReducer>;
