import React, { HTMLProps } from "react";
import Grid from "./Grid";
import styles from "./styles.module.scss";
import Head from "next/head";

const Image = ({ ...rest }) => {
  return (
    <img
      style={{
        objectFit: "cover",
        width: "100%",
        aspectRatio: "16/24",
        background: "var(--c-wild-sand",
      }}
      {...rest}
    />
  );
};

const Home = () => {
  return (
    <div className={styles.home}>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inria+Serif:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Petemoss&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className={styles.hero}>
        <img src="/images/mountains.jpg" />
      </div>
      <section className={styles.showGrid}>
        <h2 className="primary-header">Some of my recent work...</h2>
        <Grid>
          <Image src="/images/happy-kiss.jpg" />
          <Image src="/images/natural-and-candid.jpg" />
          <Image src="/images/pumpkin-baby.jpg" />
          <Image src="/images/the-joe-one.jpg" />
          <Image src="/images/happy-kiss.jpg" />
          <Image src="/images/natural-and-candid.jpg" />
          <Image src="/images/pumpkin-baby.jpg" />
          <Image src="/images/the-joe-one.jpg" />{" "}
          <Image src="/images/happy-kiss.jpg" />
          <Image src="/images/natural-and-candid.jpg" />
          <Image src="/images/pumpkin-baby.jpg" />
          <Image src="/images/the-joe-one.jpg" />{" "}
          <Image src="/images/happy-kiss.jpg" />
          <Image src="/images/natural-and-candid.jpg" />
          <Image src="/images/pumpkin-baby.jpg" />
          <Image src="/images/the-joe-one.jpg" />
        </Grid>
      </section>
    </div>
  );
};

export default Home;
