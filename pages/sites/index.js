import Layout from "@/components/Layout";
import SiteItem from "@/components/SiteItem";
import { PLACEHOLDER_URL } from "@/config/index";

export async function getStaticProps() {
  const res = await fetch(`${PLACEHOLDER_URL}?_limit=20`);
  const sites = await res.json();
  return {
    props: { sites },
    revalidate: 1,
  };
}

export default function SitesPage({ sites }) {
  return (
    <Layout>
      <h1>All Camping Sites:</h1>
      {sites.length === 0 && <h3>No camping sites to show...</h3>}
      {sites.map((site) => (
        <SiteItem key={site.id} site={site} />
      ))}
    </Layout>
  );
}
