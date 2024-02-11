import styles from "./Footer.module.css";

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.email}>
      <strong>contact</strong>
      andrew@andrewsel.com
    </div>
    <div className={styles.links}>
      <a href="https://www.linkedin.com/in/andrew-sellen-464b277/">
        <img
          src="/linkedin@2x.png"
          alt="LinkedIn Logo"
          className={styles.img}
        />
      </a>
      <a href="https://github.com/andrewsel">
        <img src="/github@2x.png" alt="GitHub Logo" className={styles.img} />
      </a>
    </div>
  </footer>
);

export default Footer;
