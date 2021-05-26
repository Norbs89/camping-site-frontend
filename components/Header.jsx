import styles from "@/styles/Header.module.css";
import Link from "next/link";
import Search from "./Search";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <a>Camping Sites UK</a>
        </Link>
      </div>
      <Search />
      <nav>
        <ul>
          <li>
            <Link href="/sites">
              <a>All Sites</a>
            </Link>
          </li>
          <li>
            <Link href="/sites/add">
              <a>Add New Site</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
