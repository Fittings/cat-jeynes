import React, { HTMLProps } from "react";
import Grid from "./Grid";
import styles from "./styles.module.scss";

const Image = ({ ...rest }) => {
  return (
    <img
      style={{
        objectFit: 'cover',
        width: '100%',
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
        <Image src="https://picsum.photos/900/1200" />
        <Image src="https://picsum.photos/900/1200" />
        <Image src="https://picsum.photos/900/1200" />
        <Image src="https://picsum.photos/900/1200" />
        <Image src="https://picsum.photos/900/1200" />
        <Image src="https://picsum.photos/900/1200" />
        <Image src="https://picsum.photos/900/1200" />
        <Image src="https://picsum.photos/900/1200" />
        <Image src="https://picsum.photos/900/1200" />
        <Image src="https://picsum.photos/900/1200" />
        <Image src="https://picsum.photos/900/1200" />
        <Image src="https://picsum.photos/900/1200" />
        <Image src="https://picsum.photos/900/1200" />
        <Image src="https://picsum.photos/900/1200" />
      </Grid>
    </div>
  );
};

export default Home;
