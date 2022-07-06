import { changeLangTypes } from "./actionTypes";
import { langState } from "./reducers/changeLang";

export const changeLanguageAction = (lang: langState["lang"]) => {
  return {
    type:
      lang === "fa"
        ? changeLangTypes.CHANGE_TO_EN
        : changeLangTypes.CHANGE_TO_FA,
  };
};
