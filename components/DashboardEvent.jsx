import Link from "next/link";
import { FaPencilAlt, FaTimes } from "react-icons/fa";
import styles from "@/styles/DashboardEvent.module.css";

const DashboardEvent = ({ site, handleDelete }) => {
  return (
    <div className={styles.event}>
      <h4>
        <Link href={`/sites/${site.slug}`}>
          <a>{site.name}</a>
        </Link>
      </h4>

      <Link href={`/sites/edit/${site.id}`}>
        <a className={styles.edit}>
          <FaPencilAlt /> <span> Edit Site</span>
        </a>
      </Link>
      <a
        href="#"
        className={styles.delete}
        onClick={() => handleDelete(site.id)}
      >
        <FaTimes /> <span> Delete Site</span>
      </a>
    </div>
  );
};

export default DashboardEvent;
