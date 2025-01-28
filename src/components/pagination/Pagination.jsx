import React from 'react';

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
    if(totalPages === 0) return null

  return (
    <div className="w-full flex items-center justify-between">
        <span className='p-3 flex items-center justify-center px-6
        text-center bg-primary rounded-md text-xs text-primaryText'>
            Page {currentPage || 0} of {totalPages || 0}
        </span>

        <ul className="flex items-center gap-3 bg-primary 
        rounded-md px-4">
            <li>
                <button
                    onClick={() => onPageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`py-2 text-base mr-2 ${currentPage === 1 
                        ? "disabled:text-gray-400" : "text-primaryText"}`}
                >
                    {'<'}
                </button>
            </li>

            {[...Array(totalPages)].map((_, index) => (
                <li key={index}>
                    <button
                        onClick={() => onPageChange(index + 1)}
                        className={`text-xs text-primaryText py-2 px-3 hover:text-main 
                        transition-all duration-300 ease-in-out ${
                        currentPage === index + 1 ? 'border-2 border-main rounded-md text-secondaryText' : ''
                        }`}
                    >
                        {index + 1}
                    </button>
                </li>
            ))}

            <li>
                <button
                    onClick={() => onPageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`py-2 text-base ml-2 ${currentPage === totalPages 
                        ? "disabled:text-gray-400" : "text-primaryText"}`}
                >
                    {'>'}
                </button>
            </li>
        </ul>

    </div>
  );
};

export default Pagination;
