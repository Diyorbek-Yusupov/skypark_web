import { appWithTranslation } from "next-i18next";
import Layout from "@/layout/Layout";
import "@/styles/globals.css";
import { atypDisplay, hauora } from "@/constants/fonts";

function App({ Component, pageProps }) {
  return (
    <div className={`${atypDisplay.variable} ${hauora.variable}`}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

export default appWithTranslation(App);
