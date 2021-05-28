import Layout from "@/components/Layout";
import SiteItem from "@/components/SiteItem";
import { PLACEHOLDER_URL, API_URL } from "@/config/index";
import Pagination from "@/components/Pagination";
const PER_PAGE = 5;

export async function getServerSideProps({ query: { page = 1 } }) {
  const start = +page === 1 ? 0 : (+page - 1) * PER_PAGE;

  const totalRes = await fetch(`${API_URL}/sites/count`);
  const totalSites = await totalRes.json();

  const pageRes = await fetch(
    `${API_URL}/sites?_limit=${PER_PAGE}&_start=${start}`
  );
  const sites = await pageRes.json();
  return {
    props: { sites, page: +page, totalSites },
  };
}

export default function SitesPage({ sites, page, totalSites }) {
  return (
    <Layout title="All Camping Sites | Find the best camping sites UK">
      <h1>All Camping Sites:</h1>
      {sites.length === 0 && <h3>No camping sites to show...</h3>}
      {sites.map((site) => (
        <SiteItem key={site.id} site={site} />
      ))}
      <Pagination page={page} total={totalSites} PER_PAGE={PER_PAGE} />
    </Layout>
  );
}
