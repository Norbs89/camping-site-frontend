import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";
import { parseCookies } from "../../utils/utils";
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

const DashboardPage = ({ sites }) => {
  const deleteEvent = (id) => {
    console.log("delete");
  };

  return (
    <Layout title="Dashboard | Find the best camping sites UK">
      <div className={styles.dash}>
        <h1>Dashboard</h1>
        <h3>My Sites:</h3>
        {sites.map((site) => (
          <DashboardEvent
            key={site.id}
            site={site}
            handleDelete={deleteEvent}
          />
        ))}
      </div>
    </Layout>
  );
};

export default DashboardPage;
