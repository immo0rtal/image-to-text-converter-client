import { type FC } from "react";

import styles from "./Preview.module.css";
import loaderImage from "./assets/loader.gif";

type PreviewProps = {
  imageUrl: string;
  name: string;
  size: number;
  showLoader: boolean;
  goBack: () => void;
};

export const Preview: FC<PreviewProps> = ({
  imageUrl,
  name,
  size,
  showLoader,
  goBack,
}) => {
  const getSizeInMb = (size: number) => {
    return (size / 8 / 1024 / 1024).toFixed(4);
  };

  return (
    <div className={styles.root}>
      <div className={styles.preview}>
        <img className={styles.previewImage} src={imageUrl} alt="preview" />
        <div>
          <div className={styles.name}>{name}</div>
          <div className={styles.size}>{getSizeInMb(size)} MB</div>
        </div>
      </div>

      <div className={styles.footer}>
        {showLoader && (
          <div className={styles.loader}>
            <span className={styles.loaderText}>Processing</span>
            <img className={styles.loaderImage} src={loaderImage} alt="" />
          </div>
        )}

        <button className={styles.backButton} onClick={goBack}>
          Go back
        </button>
      </div>
    </div>
  );
};
