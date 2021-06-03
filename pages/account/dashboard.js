import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";
import { parseCookies } from "../../utils/utils";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import styles from "@/styles/Dashboard.module.css";
import DashboardEvent from "@/components/DashboardEvent.jsx";

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

const DashboardPage = ({ sites, token }) => {
  const router = useRouter();

  const deleteSite = async (id) => {
    if (confirm("Are you sure?")) {
      const res = await fetch(`${API_URL}/sites/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message);
      } else {
        router.reload();
      }
    }
  };

  return (
    <Layout title="Dashboard | Find the best camping sites UK">
      <div className={styles.dash}>
        <h1>Dashboard</h1>
        <h3>My Sites:</h3>
        {sites.map((site) => (
          <DashboardEvent key={site.id} site={site} handleDelete={deleteSite} />
        ))}
      </div>
    </Layout>
  );
};

export default DashboardPage;
