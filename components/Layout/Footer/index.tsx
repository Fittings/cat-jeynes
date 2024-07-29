import styles from "./styles.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <img src="/logo-netlify.svg" alt="Netlify Logo" className={styles.logo} />
    </footer>
  );
}
