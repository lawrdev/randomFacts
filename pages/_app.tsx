import { useEffect } from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../layout/Layout";
import AOS from "aos";
import "aos/dist/aos.css";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      offset: 80,
    });
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
