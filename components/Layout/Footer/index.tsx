import Anchor from "@components/Anchor";
import styles from "./styles.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerCenter}>
        <div className={styles.details}>
          <span className="primary-paragraph">
            Lifestyle | Portrait | Product
          </span>
          <Anchor
            className="primary-paragraph"
            href="mailto:contact@catherinejeynesphotography.com"
          >
            contact@catherinejeynesphotography.com
          </Anchor>
          <span className="primary-paragraph">
            © 2024 Catherine Jeynes Photography
          </span>
        </div>
      </div>
    </footer>
  );
}
