import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";

const NavLink = ({ children, ...rest }) => {
  return (
    <a className={styles.navLink} {...rest}>
      {children}
    </a>
  );
};

const Navigator = () => {
  return (
    <nav className={classNames(styles.navigator, "tertiary-header")}>
      <NavLink href="/">Home</NavLink>
      <NavLink href="/about">About</NavLink>
      {/* <NavLink href="/photography">Photography</NavLink> */}
      {/* <NavLink href="/details">Details</NavLink> */}
      <NavLink href="/contact">Contact</NavLink>
    </nav>
  );
};

export default Navigator;
