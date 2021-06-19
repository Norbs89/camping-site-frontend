import { FaUser } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import { useState, useEffect, useContext } from "react";
import AuthContext from "@/context/AuthContext";
import Link from "next/link";
import Layout from "@/components/Layout";
import styles from "@/styles/AuthForm.module.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, error } = useContext(AuthContext);

  useEffect(() => {
    if (error) toast.error(error);
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handleSubmit on login page triggered");
    login({ email, password });
  };

  return (
    <Layout title="User Login | Find the best camping sites UK">
      <div className={styles.auth}>
        <h1 className={styles.mainHead}>
          <FaUser /> Log In
        </h1>
        <ToastContainer />
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.block}>
            <label htmlFor="email">Email Address:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="email@email.com"
            />
          </div>
          <div className={styles.block}>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <input type="submit" value="Login" className={styles.loginBtn} />
        </form>
        <div className={styles.bottom}>
          <p>Don't have an account?</p>
          <Link href="/account/register">Register</Link>
        </div>
      </div>
    </Layout>
  );
};

export default LoginPage;
