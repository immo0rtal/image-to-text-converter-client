import { type FC, useRef, DragEvent, useState } from "react";

import styles from "./UploadImage.module.css";

type UploadImageProps = {
  setFiles: (data: FileList | null) => void;
};

export const UploadImage: FC<UploadImageProps> = ({ setFiles }) => {
  const [isDropFile, setIsDropFile] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (event: DragEvent) => {
    setIsDropFile(true);
    event.preventDefault();
  };

  const handleDrop = (event: DragEvent) => {
    event.preventDefault();
    const files = event.dataTransfer?.files;

    files && setFiles(files);
  };

  return (
    <div
      className={`${styles.root} ${isDropFile && styles.dropFileRoot}`}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={() => setIsDropFile(false)}
    >
      {isDropFile ? (
        <div className={styles.description}>Upload file</div>
      ) : (
        <>
          <div className={styles.description}>Drag and drop or upload.</div>
          <input
            type="file"
            onChange={(event) => setFiles(event.target.files)}
            hidden
            ref={inputRef}
          />
          <button
            className={styles.submitButton}
            onClick={() => inputRef.current?.click()}
            onDragOver={(event) => event.preventDefault()}
          >
            Upload file
          </button>
        </>
      )}
    </div>
  );
};
