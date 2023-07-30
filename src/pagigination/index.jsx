import React from 'react';
import ReactPaginate from "react-paginate";

const Pagination = ({currentPage, onChangePage, countPages, className}) => {
  console.log(className)
  return (
    <ReactPaginate
      className={`${className}`}
      breakLabel="..."
      nextLabel=">"
      onPageChange={e => onChangePage(e.selected + 1)}
      pageRangeDisplayed={8}
      pageCount={countPages}
      forcePage={currentPage - 1}
      previousLabel="<"
      renderOnZeroPageCount={null}
    />
  );
};

export default Pagination;
