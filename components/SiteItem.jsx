import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/SiteItem.module.css";

const SiteItem = ({ site }) => {
  return (
    <div className={styles.site}>
      <div className={styles.img}>
        <Image
          src={site.image ? site.image : "/images/showcase4.jpg"}
          width={170}
          height={100}
        />
      </div>
      <div className={styles.info}>
        <h3>{site.title}</h3>
        <p>{site.body}</p>
      </div>
      <div className={styles.link}>
        <Link href={`/sites/${site.id}`}>
          <a className="btn">details</a>
        </Link>
      </div>
    </div>
  );
};

export default SiteItem;
