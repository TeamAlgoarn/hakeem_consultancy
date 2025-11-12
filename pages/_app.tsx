import type { AppProps } from "next/app";
import "../app/globals.css"; // your Tailwind globals
export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
