import { type FC } from "react";

import styles from "./ProcessedItem.module.css";

type ProcessedItemProps = {
  text: string;
  imageUrl: string;
};

export const ProcessedItem: FC<ProcessedItemProps> = ({ text, imageUrl }) => {
  const handleCopyText = () => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className={styles.root}>
      <img src={imageUrl} alt="" className={styles.image} />
      <div className={styles.text}>
        <div className={styles.head}>
          <div className={styles.title}>text:</div>
          <button className={styles.copyButton} onClick={handleCopyText}>
            copy
          </button>
        </div>
        {text === undefined || text === "" ? (
          <div className={styles.emptyText}>Empty</div>
        ) : (
          <div className={styles.processedText}>{text}</div>
        )}
      </div>
    </div>
  );
};
