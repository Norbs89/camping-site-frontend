import styles from "../styles/Header.module.css";
import Link from "next/link";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <a>Camping Sites UK</a>
        </Link>
      </div>

      <nav>
        <ul>
          <li>
            <Link href="/sites">
              <a>All Sites</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
