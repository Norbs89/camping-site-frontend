import Link from "next/link";
import styles from "@/styles/Header.module.css";

const Pagination = ({ page, total, PER_PAGE }) => {
  const lastPage = Math.ceil(total / PER_PAGE);

  return (
    <>
      {page > 1 && (
        <Link href={`/sites?page=${page - 1}`}>
          <a className={styles.btnSecondary}>prev</a>
        </Link>
      )}
      {page < lastPage && (
        <Link href={`/sites?page=${page + 1}`}>
          <a className={styles.btnSecondary}>next</a>
        </Link>
      )}
    </>
  );
};

export default Pagination;
