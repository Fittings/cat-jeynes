import React, { HTMLProps } from "react";
import Grid from "./Grid";
import styles from "./styles.module.scss";

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
    </div>
  );
};

export default Home;
