import React, { ReactNode } from "react";
import styles from "./styles.module.scss";

interface GridProps {
  children: ReactNode;
}

const Grid = ({ children }: GridProps) => {
  return <div className={styles.grid}>{children}</div>;
};

export default Grid;
