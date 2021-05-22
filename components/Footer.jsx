import styles from "../styles/Footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>Copyright &copy; Camping Sites UK</p>
      <p>
        <Link href="/about">About</Link>
      </p>
    </footer>
  );
};

export default Footer;
