import "@/styles/index.css";
import type { AppProps } from "next/app";
import ThemeProvider from "@/contexts/ThemeProvider";
import Layout from "@/compositions/Layout/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
