import HeadLayout from "@/layouts/head";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <HeadLayout />
      <Component {...pageProps} />;
    </>
  );
}
