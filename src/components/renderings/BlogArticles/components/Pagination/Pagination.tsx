import { memo } from "react";

import cx from "classnames";

import { IconChevron } from "@app/components/atoms/Icon/Icon";

import styles from "./Pagination.module.scss";

interface PaginationProps {
  itemOffset: number;
  articlesPerPage: number;
  pagesArr: number[];
  articlesNumber: number;
  pageCount: number;
  setItemOffset: (number: number) => void;
  isDark?: boolean;
}

const Pagination = ({
  itemOffset,
  articlesPerPage,
  pagesArr,
  articlesNumber,
  pageCount,
  setItemOffset,
  isDark,
}: PaginationProps) => {
  return (
    <div className={cx(styles.pagination, { [styles.dark]: isDark })}>
      <button
        className={cx(styles.prevBtn, styles.btn, {
          [styles.disabled]: itemOffset === 0,
        })}
        disabled={itemOffset === 0}
        onClick={() => setItemOffset(itemOffset - articlesPerPage)}
      >
        <IconChevron className={styles.icon} />
      </button>
      {pagesArr?.map(page => {
        return (
          <button
            className={cx(styles.paginateBtn, {
              [styles.current]: page === itemOffset / articlesPerPage,
            })}
            onClick={() =>
              setItemOffset((page * articlesPerPage) % articlesNumber)
            }
          >
            {page + 1}
          </button>
        );
      })}
      <button
        className={cx(styles.nextBtn, styles.btn, {
          [styles.disabled]: itemOffset === pageCount,
        })}
        disabled={itemOffset === pageCount}
        onClick={() => setItemOffset(itemOffset + articlesPerPage)}
      >
        <IconChevron className={styles.icon} />
      </button>
    </div>
  );
};

export default memo(Pagination);
