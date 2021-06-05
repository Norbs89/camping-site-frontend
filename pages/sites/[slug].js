import Layout from "@/components/Layout";
import styles from "@/styles/SitePage.module.css";
import { PLACEHOLDER_URL, API_URL } from "@/config/index";
import Link from "next/link";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
    fallback: true,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const res = await fetch(`${API_URL}/sites?slug=${slug}`);
  const sites = await res.json();

  return {
    props: {
      site: sites[0],
    },
  };
}

const SitePage = ({ site }) => {
  const router = useRouter();

  return (
    <Layout>
      <div className={styles.site}>
        <h1 className="page-main-head">{site.name}</h1>
        <ToastContainer />
        <span>{site.description}</span>
        <div className={styles.image}>
          <Image
            src={
              site.image
                ? site.image.formats.large.url
                : "/images/showcase4.jpg"
            }
            width={960}
            height={600}
          />
        </div>
        <SiteMap site={site} />
        <Link href="/sites">
          <a className={styles.back}> {"<"} Go Back</a>
        </Link>
      </div>
    </Layout>
  );
};

export default SitePage;
