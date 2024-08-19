import React from 'react'

const Button = ({title,className,icon: Icon, iconSIze, ...props}) => {
  return (
    <button
    className={`py-2 px-4 text-sm text-secondaryText bg-secondary 
    border-2 border-main rounded-md uppercase hover:bg-main 
    hover:bg-opacity-10 transition-all duration-500 ease-in-out ${className}`}
    {...props}
    >
        {Icon && <Icon size={iconSIze} />}
        {title}
    </button>
  )
}

export default Button