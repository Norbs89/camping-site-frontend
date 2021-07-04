import styles from "@/styles/Footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Link href="/about">About</Link>
      <a
        href="https://github.com/Norbs89/camping-site-frontend"
        target="_blank"
        rel="noopener noreferrer"
      >
        Github
      </a>
      <a
        href="https://linkedin.com/in/norbert-huvos"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </a>
      <a
        href="https://norbs89.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Portfolio Site
      </a>
      <a
        href="https://www.freecodecamp.org/fcc3fb86832-6ca2-4f28-927e-6ebf0fb63661"
        target="_blank"
        rel="noopener noreferrer"
      >
        FreeCodeCamp
      </a>
      <span>Ver. 1.0.6</span>
    </footer>
  );
};

export default Footer;
