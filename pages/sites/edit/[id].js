import Layout from "@/components/Layout";
import Modal from "@/components/Modal";
import ImageUpload from "@/components/ImageUpload";
import { useState } from "react";
import { useRouter } from "next/router";
import { parseCookies } from "../../../utils/utils";
import Link from "next/link";
import Image from "next/image";
import { FaImage } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import { validator } from "../../../utils/utils";
import { API_URL } from "@/config/index";
import styles from "@/styles/AddSite.module.css";
import "react-toastify/dist/ReactToastify.css";

export async function getServerSideProps({ params: { id }, req }) {
  const { token } = parseCookies(req);

  const res = await fetch(`${API_URL}/sites/${id}`);
  const site = await res.json();
  return {
    props: {
      site,
      token,
    },
  };
}

const EditSitePage = ({ site, token }) => {
  const [values, setValues] = useState({
    name: site.name,
    city: site.city,
    address: site.address,
    description: site.description,
    familyFriendly: site.familyFriendly,
    easyAccess: site.easyAccess,
    amenitiesNearby: site.amenitiesNearby,
    booking: site.booking,
  });

  const [imagePreview, setImagePreview] = useState(
    site.image ? site.image.formats.small.url : null
  );

  const [showModal, setShowModal] = useState(false);

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

    const res = await fetch(`${API_URL}/sites/${site.id}`, {
      method: "PUT",
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

  const imageUploaded = async (e) => {
    const res = await fetch(`${API_URL}/sites/${site.id}`);
    const data = await res.json();
    setImagePreview(data.image.formats.small.url);
    setShowModal(false);
  };

  return (
    <Layout title="Edit site | Find the best camping sites UK">
      <h2 className="page-main-head">Edit your site:</h2>
      <ToastContainer />
      <span>
        <div>
          <h2>Site Image</h2>
          {imagePreview ? (
            <Image src={imagePreview} height={127.5} width={230} />
          ) : (
            <div>
              <p>No image uploaded</p>
            </div>
          )}
          <div>
            <button
              onClick={() => {
                setShowModal(true);
              }}
              className="btn-secondary"
            >
              <FaImage /> Set Image
            </button>
          </div>
          <Modal
            show={showModal}
            onClose={() => {
              setShowModal(false);
            }}
          >
            <ImageUpload
              siteId={site.id}
              imageUploaded={imageUploaded}
              token={token}
            />
          </Modal>
        </div>
        <form onSubmit={handleSubmit} className={styles.form}>
          <span className={styles.block1}>
            <div className={styles.input}>
              <label htmlFor="name">Site Name:*</label>
              <input
                type="text"
                id="name"
                name="name"
                value={values.name}
                onChange={handleInputChange}
              />
            </div>
            <div className={styles.input}>
              <label htmlFor="city">City / Town / Village:*</label>
              <input
                type="text"
                name="city"
                id="city"
                value={values.city}
                onChange={handleInputChange}
              />
            </div>
          </span>
          <span className={styles.block2}>
            <div className={styles.input}>
              <label htmlFor="address">Full Address:*</label>
              <input
                type="text"
                name="address"
                id="address"
                value={values.address}
                onChange={handleInputChange}
              />
            </div>
            <div className={styles.input}>
              <label htmlFor="booking">Site URL / Booking Link:*</label>
              <input
                type="text"
                id="booking"
                name="booking"
                value={values.booking}
                onChange={handleInputChange}
              />
            </div>
          </span>
          <span className={styles.block3}>
            <div className={styles.check}>
              <label htmlFor="familyFriendly">Family Friendly?</label>
              <label className={styles.switch}>
                <input
                  type="checkbox"
                  name="familyFriendly"
                  id="familyFriendly"
                  value={values.familyFriendly}
                  checked={values.familyFriendly}
                  onChange={handleCheckbox}
                />
                <span className={styles.slider}></span>
              </label>
            </div>
            <div className={styles.check}>
              <label htmlFor="easyAccess">Disabled Access?</label>
              <label className={styles.switch}>
                <input
                  type="checkbox"
                  name="easyAccess"
                  id="easyAccess"
                  value={values.easyAccess}
                  checked={values.easyAccess}
                  onChange={handleCheckbox}
                />
                <span className={styles.slider}></span>
              </label>
            </div>
            <div className={styles.check}>
              <label htmlFor="amenitiesNearby">Nearby Amenities?</label>
              <label className={styles.switch}>
                <input
                  type="checkbox"
                  name="amenitiesNearby"
                  id="amenitiesNearby"
                  value={values.amenitiesNearby}
                  checked={values.amenitiesNearby}
                  onChange={handleCheckbox}
                />
                <span className={styles.slider}></span>
              </label>
            </div>
          </span>

          <span className={styles.block4}>
            <div className={styles.desc}>
              <label htmlFor="description">Event Description:*</label>
              <textarea
                type="text"
                name="description"
                id="description"
                value={values.description}
                onChange={handleInputChange}
              ></textarea>
            </div>
          </span>
          <span className={styles.block5}>
            <input type="submit" value="Add Site" className="btn-submit" />
          </span>
        </form>
      </span>
      <Link href="/sites">&lt; Go Back</Link>
    </Layout>
  );
};

export default EditSitePage;
