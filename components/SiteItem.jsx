import Link from "next/link";
import Image from "next/image";
import Icons from "./Icons";
import styles from "@/styles/SiteItem.module.css";

const SiteItem = ({ site }) => {
  return (
    <div className={styles.site}>
      <div className={styles.img}>
        <Image
          src={
            site.image ? site.image.formats.small.url : "/images/showcase4.jpg"
          }
          width={250}
          height={160}
        />
      </div>
      <div className={styles.info}>
        <h3>{site.name}</h3>
        <p>{site.city}</p>
        <div className={styles.icons}>
          <Icons site={site} />
        </div>
      </div>
      <div className={styles.link}>
        <Link href={`/sites/${site.slug}`}>
          <a className={styles.btnDetails}>More info...</a>
        </Link>
      </div>
    </div>
  );
};

export default SiteItem;
