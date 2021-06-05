import Layout from "@/components/Layout";
import styles from "@/styles/SitePage.module.css";
import SiteItem from "@/components/SiteItem";
import { PLACEHOLDER_URL, API_URL } from "@/config/index";
import qs from "qs";
import { useRouter } from "next/router";
import Link from "next/link";

export async function getServerSideProps({ query: { term } }) {
  const query = qs.stringify({
    _where: {
      _or: [
        { name_contains: term },
        { city_contains: term },
        { address_contains: term },
      ],
    },
  });
  const res = await fetch(`${API_URL}/sites?${query}`);
  const sites = await res.json();
  return {
    props: { sites },
  };
}

export default function SearchPage({ sites }) {
  const router = useRouter();
  return (
    <Layout title="Search Results">
      <Link href="/sites">
        <a className={styles.back}> {"<"} Go Back</a>
      </Link>
      <h1 className="page-main-head">
        Search Results for '{router.query.term}':
      </h1>
      {sites.length === 0 && <h3>No camping sites to show...</h3>}
      {sites.map((site) => (
        <SiteItem key={site.id} site={site} />
      ))}
    </Layout>
  );
}
