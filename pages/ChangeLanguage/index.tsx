import { GetServerSideProps } from "next";
import { ReactElement } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getLanguagesList } from "../../src/services/actions/apiLayer/LanguagesList";
import { changeLanguageAction } from "../../src/services/changeLang";
import { rootStateType } from "../../src/services/reducers";
import { langState } from "../../src/services/reducers/changeLang";

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
    <div className="p-3">
      <div className="d-flex align-items-center mb-4">
        <strong>Click to change language: </strong>
        <button
          className="badge badge-primary border-0 ml-2 mb-n1"
          onClick={changeLang}
        >
          {lang}
        </button>
      </div>
      <p>
        <strong>This below data get from server side props: </strong>
      </p>
      <ul>
        {Object.keys(props.languages).map((key) => (
          <li key={key} className="mb-2">
            {key}: <mark>{props.languages[key]}</mark>
          </li>
        ))}
      </ul>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const allLanguages = await getLanguagesList();
  console.log(allLanguages);

  return {
    props: {
      languages: allLanguages,
    },
  };
};
