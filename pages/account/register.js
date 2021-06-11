import { FaUser } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState, useEffect, useContext } from "react";
import AuthContext from "@/context/AuthContext";
import Link from "next/link";
import Layout from "@/components/Layout";
import styles from "@/styles/AuthForm.module.css";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const { register, error } = useContext(AuthContext);

  useEffect(() => {
    error && toast.error(error);
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== passwordConfirm) {
      toast.error("Passwords do not match!");
      return;
    }
    register({ username, email, password });
  };

  return (
    <Layout title="Register | Find the best camping sites UK">
      <div className={styles.auth}>
        <h1 className="page-main-head">
          <FaUser /> Register
        </h1>
        <ToastContainer />
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.block2}>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </div>
          <div className={styles.block2}>
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
          <div className={styles.block2}>
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
          <div className={styles.block2}>
            <label htmlFor="passwordConfirm">Confirm Password:</label>
            <input
              type="password"
              id="passwordConfirm"
              value={passwordConfirm}
              onChange={(e) => {
                setPasswordConfirm(e.target.value);
              }}
            />
          </div>
          <input type="submit" value="Register" className="btn" />
        </form>
        <div className={styles.bottom}>
          <p>Already have an account?</p>
          <Link href="/account/login">Log In</Link>
        </div>
      </div>
    </Layout>
  );
};

export default RegisterPage;
