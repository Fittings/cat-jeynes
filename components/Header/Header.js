import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.titleGroup}>
        <h1 className={styles.title}>Catherine Jeynes</h1>
        <span className={styles.subtitle}>Photography</span>
      </div>
      <nav className="navigator">
        <a href="#">EXAMPLE</a>
        <a href="#">EXAMPLE</a>
        <a href="#">EXAMPLE</a>
        <a href="#">EXAMPLE</a>
      </nav>
    </div>
  );
};

export default Header;
