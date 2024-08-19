import React from 'react'

const Input = React.forwardRef(({label,type,placeHolder,className,
    children,labelStyle,icon: Icon, iconClass, iconOnclick, ...props}, ref) => {
  return (
    <div className='w-full flex flex-col items-start gap-2'>
        {
            label && 
            <label htmlFor={label ?? placeHolder}
            className={`text-sm text-primaryText ${labelStyle}`}>
                {label}
            </label>
        }
        <div className='w-full p-2 px-4 bg-primary flex items-center 
        rounded-lg transition-all duration-300 ease-in-out focus-within:border-2 
        focus-within:border-main border-2 border-primary'>
            <input type={type} id={label ?? placeHolder} ref={ref}
            className={`w-full h-full text-sm p-1 bg-transparent 
            border-none outline-none text-secondaryText ${className}`}
            placeholder={placeHolder}
            {...props}
            />
            {Icon && <Icon className={`text-secondaryText ${iconClass}`} 
            onClick={iconOnclick}/>}
        </div>
        {children}
    </div>
  )
})

export default Input