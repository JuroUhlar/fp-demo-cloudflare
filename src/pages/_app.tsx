import "../styles/globals.css";
import type { AppProps } from "next/app";
import { FpjsProvider } from "@fingerprintjs/fingerprintjs-pro-react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <FpjsProvider
      loadOptions={{
        apiKey: "ZTdDvWxPrXKtU40eHJsB",
        scriptUrlPattern:
          "https://jurajuhlar.com/xoalCx0DzwOYtcdx/ZzXMJefTqelQislj?apiKey=<apiKey>&version=<version>&loaderVersion=<loaderVersion>",
        region: "eu",
        endpoint:
          "https://jurajuhlar.com/xoalCx0DzwOYtcdx/J4MGswoJZmX3obxy?region=eu",
      }}
    >
      <Component {...pageProps} />
    </FpjsProvider>
  );
}
