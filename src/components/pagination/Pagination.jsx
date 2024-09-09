import React, { useState, useEffect } from 'react';

const Pagination = ({ data, setData, itemsPerPage }) => {
    const [currentPage, setCurrentPage] = useState(1);

    // Calculate total number of pages
    const totalPages = Math.ceil(data?.length / itemsPerPage);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

  // Update the displayed items when currentPage or data changes
    useEffect(() => {
        const currentItems = data?.length > 0 ? data?.slice(startIndex, endIndex) : []
        setData(currentItems);
        // Dependencies to prevent infinite loop
    }, [itemsPerPage, currentPage]);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    // Generate pagination numbers with ellipses
    const paginationNumbers = () => {
        const range = [];
        const delta = 2; // Number of pages to show around the current page

        // Show all pages if totalPages is 7 or less
        if (totalPages <= 7) {
        for (let i = 1; i <= totalPages; i++) {
            range.push(i);
        }
        } else {
        const left = currentPage - delta;
        const right = currentPage + delta + 1;
        let l;

        for (let i = 1; i <= totalPages; i++) {
            if (i === 1 || i === totalPages || (i >= left && i < right)) {
            range.push(i);
            }
        }

        // Add ellipses
        for (let i = 0; i < range.length; i++) {
            if (l) {
            if (range[i] - l === 2) {
                range.splice(i, 0, l + 1);
                i++;
            } else if (range[i] - l !== 1) {
                range.splice(i, 0, '...');
                i++;
            }
            }
            l = range[i];
        }
        }

        return range;
    };

  return (
    <div className="w-full flex items-center justify-between">
        <span className='p-3 flex items-center justify-center px-6
        text-center bg-primary rounded-md text-xs text-primaryText'>
            {itemsPerPage + ' ' + 'Of' + ' ' + data?.length}
        </span>
        <ul className="flex items-center gap-3 bg-primary 
        rounded-md px-4">
            <li>
                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="py-2 text-base text-primaryText mr-2"
                >
                    {'<'}
                </button>
            </li>

            {paginationNumbers().map((number, index) => (
                <li key={index}>
                    {number === '...' ? (
                    <span className="text-sm text-secondaryText">...</span>
                    ) : (
                    <button
                        onClick={() => handlePageChange(number)}
                        className={`text-xs text-primaryText py-2 px-3 hover:text-main 
                        transition-all duration-300 ease-in-out ${
                        currentPage === number ? 'border-2 border-main rounded-md text-secondaryText' : ''
                        }`}
                    >
                        {number}
                    </button>
                    )}
                </li>
            ))}

            <li>
                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="py-2 text-base text-primaryText ml-2"
                >
                    {'>'}
                </button>
            </li>
        </ul>

    </div>
  );
};

export default Pagination;
