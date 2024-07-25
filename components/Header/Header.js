import styles from "./Header.module.css";
import Navigator from "./Navigator/Navigator";

const Header = () => {
  return (
    <div className={styles.header}>
      <a className={styles.titleGroup} href="/">
        <h1 className={styles.title}>Catherine Jeynes</h1>
        <span className={styles.subtitle}>Photography</span>
      </a>
      <Navigator />
    </div>
  );
};

export default Header;
