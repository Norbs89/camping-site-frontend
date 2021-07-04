import { useState } from "react";
import { API_URL } from "@/config/index";
import styles from "@/styles/AddSite.module.css";
import { ToastContainer, toast } from "react-toastify";

const ImageUpload = ({ siteId, imageUploaded, token }) => {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const getUploadedFileDimensions = (file) =>
    new Promise((resolve, reject) => {
      try {
        let img = new Image();

        img.onload = () => {
          const width = img.naturalWidth,
            height = img.naturalHeight;

          window.URL.revokeObjectURL(img.src);

          return resolve({ width, height });
        };

        img.src = window.URL.createObjectURL(file);
      } catch (exception) {
        return reject(exception);
      }
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const checkRes = await getUploadedFileDimensions(image);
    if (checkRes.width < 1024 && checkRes.height < 768) {
      return toast.error(
        "Please choose a high quality image, minimum 1024x768(width x height)!"
      );
    } else {
      setLoading(true);
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
    }
  };

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
    getUploadedFileDimensions(e.target.files[0]).then(({ width, height }) => {
      if (width < 1024 && height < 768) {
        return toast.error(
          "Please choose a high quality image, minimum 1024x768(width x height)!"
        );
      }
    });
  };

  return (
    <div>
      <h1 className={styles.modalHead}>Upload Site Image:</h1>
      <ToastContainer />
      <form onSubmit={handleSubmit}>
        <div className={styles.file}>
          <input
            type="file"
            onChange={handleFileChange}
            accept=".png, .jpg, .jpeg"
            required
          />
        </div>
        <div className={styles.upload}>
          {!loading ? (
            <input type="submit" value="upload" className={styles.submit} />
          ) : (
            <p>loading...</p>
          )}
        </div>
      </form>
    </div>
  );
};

export default ImageUpload;
