import Link from "next/link";
import Layout from "@/components/Layout";
import styles from "@/styles/NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <Layout title="Page Not Found">
      <div className={styles.error}>
        <h1>404</h1>
        <h4>Ooops, sadly there's nothing here...</h4>
        <Link href="/">Go back home</Link>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
