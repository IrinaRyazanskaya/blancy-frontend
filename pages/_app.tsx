import type { AppProps } from "next/app";
import localFont from "next/font/local";

import "../styles/globals.css";

const circe = localFont({
  variable: "--font-circe",
  src: [
    { path: "../public/fonts/circe.woff2", weight: "400", style: "normal" },
    { path: "../public/fonts/circe.woff", weight: "400", style: "normal" },
    { path: "../public/fonts/circe-light.woff2", weight: "300", style: "normal" },
    { path: "../public/fonts/circe-light.woff", weight: "300", style: "normal" },
    { path: "../public/fonts/circe-bold.woff2", weight: "700", style: "normal" },
    { path: "../public/fonts/circe-bold.woff", weight: "700", style: "normal" },
    { path: "../public/fonts/circe-extrabold.woff2", weight: "800", style: "normal" },
    { path: "../public/fonts/circe-extrabold.woff", weight: "800", style: "normal" },
  ],
  display: "swap",
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={circe.variable}>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
