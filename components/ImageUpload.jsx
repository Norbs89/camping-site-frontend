import { useState } from "react";
import { API_URL } from "@/config/index";
import styles from "@/styles/AddSite.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ImageUpload = ({ siteId, imageUploaded, token }) => {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const formData = new FormData();
    formData.append("files", image);
    formData.append("ref", "sites");
    formData.append("refId", siteId);
    formData.append("field", "image");

    const res = await fetch(`${API_URL}/upload`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    if (res.ok) {
      imageUploaded();
      setLoading(false);
    } else {
      return toast.error("Something went wrong, please try again!");
    }
  };

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <div>
      <h1 className={styles.modalHead}>Upload Site Image:</h1>
      <ToastContainer />
      <form onSubmit={handleSubmit}>
        <div className={styles.file}>
          <input type="file" onChange={handleFileChange} required />
        </div>
        <div className={styles.upload}>
          {!loading ? (
            <input type="submit" value="upload" className="btn-submit" />
          ) : (
            <p>loading...</p>
          )}
        </div>
      </form>
    </div>
  );
};

export default ImageUpload;
