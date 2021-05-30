import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";
import { parseCookies } from "../../utils/utils";

export async function getServerSideProps({ req }) {
  const { token } = parseCookies(req);

  const res = await fetch(`${API_URL}/sites/me`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const sites = await res.json();
  return {
    props: {
      sites,
      token,
    },
  };
}

const DashboardPage = ({ sites }) => {
  return (
    <Layout title="Dashboard | Find the best camping sites UK">
      dashboard
    </Layout>
  );
};

export default DashboardPage;
