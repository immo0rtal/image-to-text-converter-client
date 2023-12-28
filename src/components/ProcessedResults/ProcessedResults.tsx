import { useState, type FC } from "react";

import { EmptyItem } from "./EmptyItem/EmptyItem";
import { ProcessedItem } from "./ProcessedItem/ProcessedItem";
import styles from "./ProcessedResults.module.css";
import { ResultItem } from "./useProcessedResults";
import arrowImage from "./assets/arrow.png";

type ProcessedResultsProps = {
  results: ResultItem[];
};

export const ProcessedResults: FC<ProcessedResultsProps> = ({ results }) => {
  const [page, setPage] = useState<number>(0);

  const slicedResults = results.slice(page, page + 3);

  const handleClickLeft = () => {
    const newPage = page - 3;

    if (newPage < 0) {
      setPage(0);
    } else {
      setPage(newPage);
    }
  };

  const handleClickRight = () => {
    const newPage = page + 3;

    if (newPage < results.length) {
      setPage(page + 3);
    }
  };

  return (
    <div className={styles.root}>
      <div className={styles.header}>Processed results</div>

      <div className={styles.list}>
        {slicedResults.map((item) => (
          <ProcessedItem
            text={item.result}
            key={item.id}
            imageUrl={item.imported_file}
          />
        ))}

        {slicedResults.length === 0 && <EmptyItem />}
      </div>

      {results.length > 3 && (
        <div className={styles.pagination}>
          <div className={styles.pages}>
            {page + 1} - {page + 3}
          </div>
          <div className={styles.controls}>
            <div className={styles.contolArrow} onClick={handleClickLeft}>
              <img
                className={`${styles.arrow} ${styles.leftArrow}`}
                src={arrowImage}
                alt="left"
              />
            </div>
            <div className={styles.contolArrow} onClick={handleClickRight}>
              <img className={styles.arrow} src={arrowImage} alt="right" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
