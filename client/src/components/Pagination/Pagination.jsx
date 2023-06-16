import React from "react";
import style from "../Pagination/Pagination.module.css";

import { calculateMaxPages } from "../../helpers/calculateMaxPages";

const Pagination = ({ pokePerPage, setPageValue, allPoke, currentPage }) => {
  const pages = [];
  
  calculateMaxPages(allPoke, pokePerPage, pages);

  const handlerPrev = () => {
    if (currentPage === 1) return;
    setPageValue(currentPage - 1);
  };

  const handlerNext = () => {
    if (currentPage === pages.length) return;
    setPageValue(currentPage + 1);
  };

  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div onClick={handlerPrev} className={style.prevNext}>
          <h4>{`<<`}</h4>
        </div>

        <h2  className={style.currentPage}>Page {currentPage}</h2>

        <div className={style.pagesContainer}>
          {pages &&
            pages.map((page) => {
              return (
                <div
                  key={page}
                  onClick={() => setPageValue(page)}
                  className={`${style.pages} ${currentPage === page ? style.pressed : ""}`}
                >
                  <h2>{page}</h2>
                </div>
              );
            })}
        </div>

        <div onClick={handlerNext} className={style.prevNext}>
          <h4>{`>>`}</h4>
        </div>

      </div>
    </div>
  );
};

export default Pagination;
