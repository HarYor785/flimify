import React from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const Container = ({children, className}) => {
  return (
    <div className='w-full relative flex flex-col overflow-hidden'>
        <ToastContainer 
            position="top-right"
            autoClose={5000} // Duration in milliseconds to automatically close the toast
            hideProgressBar={false} // Whether to hide the progress bar
            newestOnTop={false} // Whether new toasts are added to the top
            closeOnClick // Whether the toast closes on click
            rtl={false} // Whether the text is right-to-left
            pauseOnFocusLoss // Pause toast when window loses focus
            draggable // Allow dragging of the toast
            pauseOnHover // Pause toast on hover
            theme="light"
        />
        <Navbar/>
        <div className={`w-full mt-16 md:container mx-auto md:px-20 px-4 mb-7 min-h-screen ${className}`}>
            {children}
        </div>
        <Footer/>
    </div>
  )
}

export default Container