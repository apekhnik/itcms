import React from "react";
import { useState } from "react";
import style from "./Users.module.css";
const Paginator = ({
  totalItemsCount,
  pageSize,
  currentPage,
  onPageChange,
  portionSize = 10,
}) => {
  const pagesCount = Math.ceil(totalItemsCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  const portionCount = Math.ceil(pagesCount / portionSize);

  const [portionNumber, setPortionNumber] = useState(
    Math.ceil(currentPage / portionSize)
  );
  const leftPortionNumber = (portionNumber - 1) * portionSize + 1;
  const rightPortionNumber = portionNumber * portionSize;

  const pagination = pages
    .filter((p) => p >= leftPortionNumber && p <= rightPortionNumber)
    .map((i) => (
      <span
        style={currentPage === i ? { color: "red" } : {}}
        onClick={() => onPageChange(i)}
        key={i}
        className={style.paginator}
      >
        {i}
      </span>
    ));
  return (
    <div>
      {portionNumber > 1 && (
        <button onClick={() => setPortionNumber(portionNumber - 1)}>
          prev
        </button>
      )}
      {pagination}
      {portionCount > portionNumber && (
        <button onClick={() => setPortionNumber(portionNumber + 1)}>
          next
        </button>
      )}
    </div>
  );
};
export default Paginator;
