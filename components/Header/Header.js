import styles from "./Header.module.css";
import Navigator from "./Navigator/Navigator";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.titleGroup}>
        <h1 className={styles.title}>Catherine Jeynes</h1>
        <span className={styles.subtitle}>Photography</span>
      </div>
      <Navigator />
    </div>
  );
};

export default Header;
