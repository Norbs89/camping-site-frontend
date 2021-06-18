import styles from "@/styles/Header.module.css";
import Link from "next/link";
import Search from "./Search";
import { useContext } from "react";
import AuthContext from "@/context/AuthContext";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";

const Header = () => {
  const { user, logout } = useContext(AuthContext);

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
          {user ? (
            <>
              <li>
                <Link href="/sites/add">
                  <a>Add New Site</a>
                </Link>
              </li>
              <li>
                <Link href="/account/dashboard">
                  <a>Dashboard</a>
                </Link>
              </li>
              <li>
                <button
                  className={styles.btnSecondary}
                  onClick={() => {
                    logout();
                  }}
                >
                  <span className={styles.icon}>
                    <FaSignOutAlt />
                  </span>
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link href="/account/login">
                  <a className={styles.btnSecondary}>
                    <span className={styles.icon}>
                      <FaSignInAlt />
                    </span>
                    Login
                  </a>
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
