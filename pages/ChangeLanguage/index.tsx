import { GetServerSideProps } from "next";
import { ReactElement } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getLanguagesList } from "../../src/services/actions/apiLayer/LanguagesList";
import { changeLanguageAction } from "../../src/services/changeLang";
import { rootStateType } from "../../src/services/reducers";
import { langState } from "../../src/services/reducers/changeLang";
import Sass from "./index.module.scss";
import cn from "classnames";

type changeLangProps = {
  lang: langState["lang"];
  languages: {
    [key: string]: string;
    value: string;
  };
};

export default function ChangeLanguage(props: changeLangProps): ReactElement {
  const dispatch = useDispatch();
  const { lang } = useSelector((state: rootStateType) => state.app);

  const changeLang = () => {
    dispatch(changeLanguageAction(lang));
  };

  return (
    <div className={cn(Sass.container, "p-3")}>
      <div className="mb-3 border p-3 rounded">
        <p className="text-muted">Use global state manager here: </p>
        <div className="d-flex align-items-center ">
          <strong>Click to change language: </strong>
          <button
            className="badge badge-primary border-0 ml-2"
            onClick={changeLang}
          >
            {lang}
          </button>
        </div>
      </div>
      <div className="p-3 rounded border">
        <p className="text-muted">
          This below data get from server side props:
        </p>
        <ul>
          {Object.keys(props.languages).map((key) => (
            <li key={key} className="mb-2">
              <strong>{key}</strong>: <mark>{props.languages[key]}</mark>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const allLanguages = await getLanguagesList();
  return {
    props: {
      languages: allLanguages,
    },
  };
};
