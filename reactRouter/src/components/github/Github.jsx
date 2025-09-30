import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router';

export default function Github(){
    const data = useLoaderData();
    // const [data,setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/Mukesh140404')
    //     .then(response => response.json())
    //     .then(data => setData(data))
    // },[])
    return (
        <div className='text-center m-4 bg-gray-600 p-4 text-white text-3xl'> 
            <h1>Github Profile</h1>
            <div className='flex justify-center mt-4 p-4'>
                <img src={data.avatar_url} alt="" />
                <div className='text-left ml-4'>
                    <h1>Username: {data.login}</h1>
                    <h1>Followers: {data.followers}</h1>
                    <h1>Following: {data.following}</h1>
                    <h1>Public Repos: {data.public_repos}</h1>
                    <p>Bio: {data.bio}</p>
                </div>
            </div>
        </div>
    )
}
export const GithubInfo = async () => {
    const response = await fetch('https://api.github.com/users/Mukesh140404');
    return response.json();
}