import Head from "next/head";
import Header from "@components/Header/Header";
import Footer from "@components/Footer/Footer";

import styles from "./index.module.css";

export default function Home() {
  return (
    <div className={styles.root}>
      <Head>
        <title>Catherine Jeynes Photography</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inria+Serif:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inria+Serif:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Header />
      <main className={styles.main}>
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>
      <Footer />
    </div>
  );
}
