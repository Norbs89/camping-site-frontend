import Head from "next/head";
import styles from "../styles/Layout.module.css";

const Layout = ({ title, keywords, description, children }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <div className={styles.container}>{children}</div>
    </div>
  );
};

Layout.defaultProps = {
  title: "Camping Sites | Find the best camping sites UK",
  description: "Find user recommended camping sites across the country.",
  keywords: "camping, sites, uk, find, nature",
};

export default Layout;
