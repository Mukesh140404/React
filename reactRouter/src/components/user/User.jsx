import React from 'react'
import { useParams } from 'react-router'

export default function User(){
    const {userId} = useParams()
    return(
        <h1 className='text-2xl font-bold bg-black text-white text-center p-4'>user: {userId}</h1>
    )
}