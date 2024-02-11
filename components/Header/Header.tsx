import Image from "next/image";
import styles from "./Header.module.css";

const Header = () => (
  <>
    <header className={styles.header}>
      <Image
        src="/Andrew-Sellen-Profile-200px.png"
        alt="Andrew Sellen"
        width={200}
        height={200}
        className={styles.img}
      />
      <h1 className={styles.h1}>Andrew Sellen</h1>
      <p className={styles.p}>
        Experienced full-stack web & app developer with a background in startups
        and marketing
      </p>
    </header>
  </>
);

export default Header;
