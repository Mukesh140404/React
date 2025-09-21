import React from 'react'

const Imgcrd = ({src,text,desc}) =>{
    return (
        <>
            <div class='relative h-[400px] w-300 rounded-md m-2'>
                <img
                    src={src}
                    alt='img'
                    class='z-0 h-full w-full rounded-md object-cover'
                />
                <div class='absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent'></div>
                <div class='absolute bottom-4 left-4 text-left'>
                    <h1 class='text-lg font-semibold text-white'>{text}</h1>
                    <p class='mt-2 text-sm text-gray-100'>
                        {desc}
                    </p>
                    <button class='mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-red-400'>
                        view profile ‣
                    </button>
                </div>
            </div>
        </>
    )
}
export default Imgcrd