import "../styles/globals.css";
import { store } from "../src/services/store";
import { AppProps } from "next/app";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
