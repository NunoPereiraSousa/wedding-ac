import type { AppProps } from "next/app";
import "../styles/globals.scss"; // Import global styles here ✅

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
