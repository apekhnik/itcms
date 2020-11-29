import React from "react";
import { useState } from "react";
import style from "./Users.module.css";
type PropsType = {
  totalItemsCount:number
  pageSize:number
  currentPage:number
  onPageChange:(i:number)=>void
  portionSize?:number 
}
let Paginator:React.FC<PropsType>= ({
  totalItemsCount,
  pageSize,
  currentPage,
  onPageChange,
  portionSize = 10,
}) => {
  let pagesCount = Math.ceil(totalItemsCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  let portionCount = Math.ceil(pagesCount / portionSize);

  let [portionNumber, setPortionNumber] = useState(
    Math.ceil(currentPage / portionSize)
  );
  let leftPortionNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionNumber = portionNumber * portionSize;

  let pagination = pages
    .filter((p) => p >= leftPortionNumber && p <= rightPortionNumber)
    .map((i) => (
<span
        style={currentPage === i ? { color: "red" } : {}}
        onClick={() => onPageChange(i)}
        key={i}
        className={style.paginator}>
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
  )
};
export default Paginator;
