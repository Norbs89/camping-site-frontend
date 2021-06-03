import Layout from "@/components/Layout";
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { parseCookies } from "../../utils/utils";
import { ToastContainer, toast } from "react-toastify";
import { validator } from "../../utils/utils";
import { API_URL } from "@/config/index";
import styles from "@/styles/AddSite.module.css";
import "react-toastify/dist/ReactToastify.css";

export async function getServerSideProps({ req }) {
  const { token } = parseCookies(req);
  return {
    props: {
      token,
    },
  };
}

const AddSitePage = ({ token }) => {
  const [values, setValues] = useState({
    name: "",
    city: "",
    address: "",
    description: "",
    familyFriendly: false,
    easyAccess: false,
    amenitiesNearby: false,
    booking: "",
  });

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      validator([
        values.name,
        values.city,
        values.address,
        values.description,
        values.booking,
      ]).length !== 5
    ) {
      return toast.error("Please fill in all required fields!");
    }

    const res = await fetch(`${API_URL}/sites`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(values),
    });

    if (!res.ok) {
      toast.error("Something went wrong, please try again!");
    } else {
      const site = await res.json();
      router.push(`/sites/${site.slug}`);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleCheckbox = (e) => {
    const { name, checked } = e.target;
    setValues({ ...values, [name]: checked });
  };

  return (
    <Layout title="Add a new site | Find the best camping sites UK">
      <Link href="/sites">&lt; Go Back</Link>
      <h2>Add a new site:</h2>
      <ToastContainer />
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.grid}>
          <div>
            <label htmlFor="name">Site Name:*</label>
            <input
              type="text"
              id="name"
              name="name"
              value={values.name}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="city">City / Town / Village:*</label>
            <input
              type="text"
              name="city"
              id="city"
              value={values.city}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="address">Full Address:*</label>
            <input
              type="text"
              name="address"
              id="address"
              value={values.address}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="booking">Site URL / Booking Link:*</label>
            <input
              type="text"
              id="booking"
              name="booking"
              value={values.booking}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="familyFriendly">Family Friendly?</label>
            <input
              type="checkbox"
              name="familyFriendly"
              id="familyFriendly"
              value={values.familyFriendly}
              onChange={handleCheckbox}
            />
          </div>
          <div>
            <label htmlFor="easyAccess">Disabled Access?</label>
            <input
              type="checkbox"
              name="easyAccess"
              id="easyAccess"
              value={values.easyAccess}
              onChange={handleCheckbox}
            />
          </div>
          <div>
            <label htmlFor="amenitiesNearby">
              On-site &amp; Nearby Amenities?
            </label>
            <input
              type="checkbox"
              name="amenitiesNearby"
              id="amenitiesNearby"
              value={values.amenitiesNearby}
              onChange={handleCheckbox}
            />
          </div>
        </div>

        <div>
          <label htmlFor="description">Event Description:*</label>
          <textarea
            type="text"
            name="description"
            id="description"
            value={values.description}
            onChange={handleInputChange}
          ></textarea>
        </div>

        <input type="submit" value="Add Site" className="btn" />
      </form>
    </Layout>
  );
};

export default AddSitePage;
