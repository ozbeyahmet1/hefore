import HeadLayout from "@/layouts/head";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../store/state";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <>
        <HeadLayout />
        <Component {...pageProps} />
      </>
    </Provider>
  );
}
