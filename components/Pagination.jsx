import Link from "next/link";
import styles from "@/styles/Pagination.module.css";

const Pagination = ({ page, total, PER_PAGE }) => {
  const lastPage = Math.ceil(total / PER_PAGE);

  return (
    <div className={styles.pContainer}>
      {page > 1 && (
        <Link href={`/sites?page=${page - 1}`}>
          <a className={styles.btn}>Previous Page</a>
        </Link>
      )}
      {page < lastPage && (
        <Link href={`/sites?page=${page + 1}`}>
          <a className={styles.btn}>Next Page</a>
        </Link>
      )}
    </div>
  );
};

export default Pagination;
