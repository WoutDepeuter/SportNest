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

    const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
    return (
    <div className="flex flex-row w-full mx-5 justify-center p-2">
      <button
        onClick={handlePrevClick}
        disabled={currentPage === 1}
        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
      >
        Prev
      </button>
        {pageNumbers.map((page) => {
            const active = currentPage === page;

            const bg = active ? "bg-gray-400" : "bg-gray-300"
            const hoverBg = active ? "bg-gray-600" : "bg-gray-400"
            return (
            <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`${bg} hover:${hoverBg} text-gray-800 font-bold py-2 px-4`}
            >
                {page}
            </button>
            )})}
        <button
            onClick={handleNextClick}
            disabled={currentPage === totalPages}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
        >
            Next
        </button>
    </div>
  );
};

export default Pagination;

type SoloPaginationProps = {
    back: () => void;
    next: () => void;
    hasNext: () => boolean;
    hasPrevious: () => boolean;
    classes?: string
}

export function SoloPagination(props: SoloPaginationProps) {
    return (
        <div className={`flex ` + (props.classes ?? "")}>
            {props.hasPrevious() && <button
                onClick={() => {
                    props.back();
                }}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
            >
                Prev
            </button>}

            {props.hasNext() && <button
                onClick={() => {
                    props.next();
                }}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
            >
                Next
            </button>}


        </div>
    );
}
