import React from 'react';

export default function Button({
    children,
    type='button',
    textColor='text-white',
    className='',
    bgColor = 'bg-blue-600',
    ...props
}){
    return (
        <button className={`px-4 py-2 rounded-lg ${className} ${textColor} ${bgColor}`} {...props}>{children}</button>
    )
}