// Pagination.tsx
import React from 'react';

type PaginationProps = {
  totalItems: number; // Total number of items you are paginating over
  itemsPerPage: number; // Number of items per page
  currentPage: number; // The current page number
  onPageChange: (page: number) => void; // Callback when a page is changed
};

const Pagination: React.FC<PaginationProps> = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage); // Calculate total number of pages

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page); // Pass page number to parent
    }
  };

  const handlePrevClick = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1); // Go to previous page
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1); // Go to next page
    }
  };

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      <button
        onClick={handlePrevClick}
        disabled={currentPage === 1}
        className="prev-btn"
      >
        Prev
      </button>
      <ul className="page-numbers">
        {pageNumbers.map((page) => (
          <li key={page}>
            <button
              onClick={() => handlePageChange(page)}
              className={currentPage === page ? "active" : ""}
            >
              {page}
            </button>
          </li>
        ))}
      </ul>
      <button
        onClick={handleNextClick}
        disabled={currentPage === totalPages}
        className="next-btn"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
