import { Reducer } from "redux";
import { changeLangTypes } from "../actionTypes";
import { dispatchAction } from "../store";

export class langState {
  lang: string = "fa";
}

export const langReducer: Reducer<langState, dispatchAction> = (
  state = new langState(),
  action
) => {
  let updatedState = {
    ...state,
    lang: state.lang,
  };

  switch (action.type) {
    case changeLangTypes.CHANGE_TO_FA:
      updatedState = {
        ...state,
        lang: "fa",
      };
      break;
    case changeLangTypes.CHANGE_TO_EN:
      updatedState = {
        ...state,
        lang: "en",
      };
      break;
    default:
      break;
  }

  return updatedState;
};
