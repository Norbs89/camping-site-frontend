import { FaAccessibleIcon, FaChild, FaUtensils } from "react-icons/fa";
import { IconContext } from "react-icons";
import styles from "@/styles/Icons.module.css";

const Icons = ({ site }) => {
  return (
    <div className={styles.iconRow}>
      <span className={`${!site.amenitiesNearby && styles.dim} ${styles.icon}`}>
        <FaUtensils />{" "}
        <span className={styles.desc}>Amenities on-site &amp; nearby</span>
      </span>
      <span className={`${!site.familyFriendly && styles.dim} ${styles.icon}`}>
        <FaChild /> <span className={styles.desc}>Family friendly</span>
      </span>
      <span className={`${!site.easyAccess && styles.dim} ${styles.icon}`}>
        <FaAccessibleIcon />{" "}
        <span className={styles.desc}>Disabled facilities</span>
      </span>
    </div>
  );
};

export default Icons;
