import { type FC } from "react";

import styles from "./UserResult.module.css";

type UserResultProps = {
  text: string;
};

export const UserResult: FC<UserResultProps> = ({ text }) => {
  const handleCopyText = () => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className={styles.root}>
      <div className={styles.header}>Your result</div>
      <div className={styles.body}>
        <div className={styles.head}>
          <div className={styles.title}>text:</div>
          <button className={styles.copyButton} onClick={handleCopyText}>
            copy
          </button>
        </div>

        <div className={styles.processedText}>{text}</div>
      </div>
    </div>
  );
};
