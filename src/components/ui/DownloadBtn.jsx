import Link from 'next/link'
import React from 'react'

const DownloadBtn = ({href}) => {
  return (

    <div className="tooltip-container">
      <a href={href || '#'} 
      download className="button-content">
        <span className="text">Download</span>
        <svg 
        className="share-icon"
        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="20px" width="20px">
        <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
        <g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g>
        <g id="SVGRepo_iconCarrier"> <g id="Interface / Download"> 
        <path stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="#f1f1f1" d="M6 21H18M12 3V17M12 17L17 12M12 17L7 12" id="Vector"></path> </g> </g></svg>
      </a>
    </div>
  )
}

export default DownloadBtn