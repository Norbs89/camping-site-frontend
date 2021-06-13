import Layout from "@/components/Layout";
import styles from "@/styles/SitePage.module.css";
import { API_URL } from "@/config/index";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import SiteMap from "@/components/SiteMap";

export async function getStaticPaths() {
  const res = await fetch(`${API_URL}/sites`);
  const sites = await res.json();

  const paths = sites.map((site) => ({
    params: { slug: site.slug },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const res = await fetch(`${API_URL}/sites?slug=${slug}`);
  const sites = await res.json();

  return {
    props: { site: sites[0] },
  };
}

const SitePage = ({ site }) => {
  const router = useRouter();
  return (
    <Layout>
      <div className={styles.site}>
        <h1 className="page-main-head">{site.name}</h1>
        <div className={styles.mediaGroup}>
          <span className={styles.map}>
            <SiteMap site={site} />
          </span>
          <div className={styles.image}>
            <Image
              src={
                site.image
                  ? site.image.formats.medium.url
                  : "/images/showcase4.jpg"
              }
              width={550}
              height={330}
            />
          </div>
        </div>
        <p className={styles.description}>{site.description}</p>
        <a
          className={styles.booking}
          href={site.booking}
          target="_blank"
          rel="noopener noreferrer"
        >
          &raquo;More info &amp; booking &amp; prices&laquo;
        </a>
        <Link href="/sites">
          <a className={styles.back}> {"<"} Go Back</a>
        </Link>
      </div>
    </Layout>
  );
};

export default SitePage;
