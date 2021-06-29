import Head from "next/head";
import { useRouter } from "next/router";
import Header from "./Header";
import Footer from "./Footer";
import Showcase from "./Showcase";
import styles from "@/styles/Layout.module.css";

const Layout = ({ title, keywords, description, children }) => {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://camping-sites-uk.vercel.app/"
        />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta
          name="image"
          property="og:image"
          content="/images/showcase4.jpg"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://camping-sites-uk.vercel.app/"
        />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content="/images/showcase4.jpg" />
      </Head>
      <div className={styles.content}>
        <span className={styles.head}>
          <Header />
        </span>
        <span className={styles.children}>
          {router.pathname === "/" && <Showcase />}
          <div className={styles.container}>{children}</div>
        </span>
        <span className={styles.foot}>
          <Footer />
        </span>
      </div>
    </div>
  );
};

Layout.defaultProps = {
  title: "Camping Sites | Find the best camping sites UK",
  description: "Find user recommended camping sites across the country.",
  keywords: "camping, sites, uk, find, nature",
};

export default Layout;
