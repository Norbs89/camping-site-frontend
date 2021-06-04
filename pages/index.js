import Layout from "@/components/Layout";
import SiteItem from "@/components/SiteItem";
import { PLACEHOLDER_URL, API_URL } from "@/config/index";
import Link from "next/link";

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/sites?_limit=3`);
  const sites = await res.json();
  return {
    props: { sites },
    revalidate: 1,
  };
}

export default function Home({ sites }) {
  return (
    <Layout>
      <h1 className="recommend">Recommended Sites:</h1>
      {sites.length === 0 && <h3>No camping sites to show...</h3>}
      {sites.map((site) => (
        <SiteItem key={site.id} site={site} />
      ))}
      {sites.length > 0 && (
        <div className="all-sites">
          <Link href="/sites">
            <a className="btn-all">View All Sites</a>
          </Link>
        </div>
      )}
    </Layout>
  );
}
