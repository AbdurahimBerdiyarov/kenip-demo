import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "../scss/app.scss";
import "../scss/pc/main.scss";
import "../scss/mobile/main.scss";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
