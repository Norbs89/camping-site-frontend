import Layout from "@/components/Layout";
import styles from "@/styles/SitePage.module.css";
import { PLACEHOLDER_URL, API_URL } from "@/config/index";
import Link from "next/link";
import { FaPencilAlt, FaTimes } from "react-icons/fa";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";

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

  const deleteSite = async (e) => {
    if (confirm("Are you sure?")) {
      const res = await fetch(`${API_URL}/sites/${site.id}`, {
        method: "DELETE",
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message);
      } else {
        router.push("/sites");
      }
    }
  };

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
        <h1>{site.name}</h1>
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
        <Link href="/sites">
          <a className={styles.back}> {"<"} Go Back</a>
        </Link>
      </div>
    </Layout>
  );
};

export default SitePage;
