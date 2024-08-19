import React from 'react'

const Select = React.forwardRef(({label,className,children,placeHolder,
    labelStyle,errors,...props}, ref) => {
    return (
        <div className='w-full flex flex-col items-start gap-2'>
            {
                label &&
                <label className={`text-sm text-primaryText ${labelStyle}`}>
                    {label}
                </label>
            }
            <select className="select w-full py-0 px-5 h-[45px] rounded-lg 
            transition-all duration-300 ease-in-out focus-within:border-2 
            focus-within:border-main text-secondaryText text-sm 
            outline-none border-2 border-primary cursor-pointer"
            {...props} ref={ref}
            >
                <option disabled selected className="text-primaryText">
                    {placeHolder}
                </option>
                {children}
            </select>
            {errors && <span className="text-xs text-red-600">
                {errors}
            </span>}
        </div>
    )
})

export default Select