import Layout from "@/components/Layout";
import styles from "@/styles/SitePage.module.css";
import { PLACEHOLDER_URL } from "@/config/index";
import Link from "next/link";
import { FaPencilAlt, FaTimes } from "react-icons/fa";
import Image from "next/image";

export async function getStaticPaths() {
  const res = await fetch(`${PLACEHOLDER_URL}?_limit=20`);
  const sites = await res.json();

  const paths = sites.map((site) => ({
    params: { id: site.id.toString() },
  }));
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`${PLACEHOLDER_URL}/${params.id}`);
  const sites = await res.json();

  return {
    props: {
      site: sites,
    },
  };
}

const deleteSite = (e) => {
  console.log("delete");
};
const SitePage = ({ site }) => {
  return (
    <Layout>
      <div className={styles.site}>
        <div className={styles.controls}>
          <Link href={`/sites/edit/${site.id}`}>
            <a>
              <FaPencilAlt /> Edit Site
            </a>
          </Link>
          <a href="#" className={styles.delete} onClick={deleteSite}>
            <FaTimes /> Delete Site
          </a>
        </div>
        <h1>{site.title}</h1>
        <span>{site.body}</span>
        <div className={styles.image}>
          <Image src={"/images/showcase5.jpg"} width={960} height={600} />
        </div>
        <Link href="/sites">
          <a className={styles.back}> {"<"} Go Back</a>
        </Link>
      </div>
    </Layout>
  );
};

export default SitePage;
