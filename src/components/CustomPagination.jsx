import React, { useEffect, useState } from "react";
import Pagination from "react-bootstrap/Pagination";

function CustomPagination({
  dataLength = 0,
  pagePath = "/",
  itemPerPage = 1,
  currentPage = 1,
  setCurrentPage = () => {},
}) {
  const min = 1;
  const max = Math.ceil(dataLength / itemPerPage);

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  useEffect(() => {
    setCurrentPage(min);
  }, []);

  const createPagination = (pages, page) => {
    const str = [];
    let active;
    let pageCutLow = page - 1;
    let pageCutHigh = page + 1;
    if (pages < 6) {
      for (let p = 1; p <= pages; p++) {
        active = page === p ? "active" : "no";
        str.push(
          <Pagination.Item
            key={p}
            active={page === p}
            onClick={() => handlePageChange(p)}
          >
            {p}
          </Pagination.Item>
        );
      }
    } else {
      if (page > 2) {
        str.push(
          <Pagination.Item
            key={1}
            active={currentPage === 1}
            onClick={() => handlePageChange(1)}
          >
            1
          </Pagination.Item>
        );
        if (page > 3) {
          str.push(<Pagination.Ellipsis key="ell1" disabled />);
        }
      }

      if (page === 1) {
        pageCutHigh += 2;
      } else if (page === 2) {
        pageCutHigh += 1;
      }
      if (page === pages) {
        pageCutLow -= 2;
      } else if (page === pages - 1) {
        pageCutLow -= 1;
      }

      for (let p = pageCutLow; p <= pageCutHigh; p++) {
        if (p === 0) {
          p += 1;
        }
        if (p > pages) {
          continue;
        }
        active = page === p ? "active" : "no";
        str.push(
          <Pagination.Item
            key={p}
            active={page === p}
            onClick={() => handlePageChange(p)}
          >
            {p}
          </Pagination.Item>
        );
      }

      if (page < pages - 1) {
        if (page < pages - 2) {
          str.push(<Pagination.Ellipsis key="ell2" disabled />);
        }
        str.push(
          <Pagination.Item
            key={pages}
            active={currentPage === pages}
            onClick={() => handlePageChange(pages)}
          >
            {pages}
          </Pagination.Item>
        );
      }
    }

    return str;
  };

  return (
    <Pagination>
      <Pagination.Prev
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === min}
      />
      {createPagination(max, currentPage)}
      <Pagination.Next
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === max}
      />
    </Pagination>
  );
}

export default CustomPagination;
