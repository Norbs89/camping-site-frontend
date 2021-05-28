import styles from "@/styles/Header.module.css";
import Link from "next/link";
import Search from "./Search";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";

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
          <li>
            <Link href="/account/login">
              <a className="btn-secondary btn-icon">
                <FaSignInAlt />
                Login
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
