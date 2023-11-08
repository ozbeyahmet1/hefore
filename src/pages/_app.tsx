import HeadLayout from "@/layouts/head";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <HeadLayout />
      <Component {...pageProps} />
    </>
  );
}
