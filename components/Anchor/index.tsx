import React from "react";
import styles from "./styles.module.scss";

const Anchor = ({ children, className, ...rest }) => {
  return (
    <a className={[styles.anchor, className].join(" ")} {...rest}>
      {children}
    </a>
  );
};

export default Anchor;
