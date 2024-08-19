import React from 'react'

const Modal = ({children,isOpen,toggleModal,className}) => {
  return (
        <div
            className="fixed inset-0 flex items-center justify-center 
            bg-black bg-opacity-20 md:p-0 p-8"
            onClick={toggleModal}
            >
            <div
                className={`bg-[#1a191f] rounded-lg shadow-lg max-w-md w-full p-6 
                transform transition-all duration-300 scale-95 opacity-0 ${className}`}
                style={{ animation: isOpen ? 'fadeIn 0.3s forwards' : 'fadeOut 0.3s forwards' }}
                onClick={(e) => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
  )
}

export default Modal