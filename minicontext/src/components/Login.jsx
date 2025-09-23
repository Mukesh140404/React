import React , {useState, useContext}from 'react';
import UserContext from '../context/UserContext';
export default function Login() {
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')

    const {setUser} = useContext(UserContext)
    const handlesubmit = (e) => {
        e.preventDefault()
        setUser({username,password})
    }
    return(
        <div className='flex flex-wrap gap-3'>
        <h1 className='px-3 mx-2'>Login</h1>
        <input 
            className='border border-blue-700 px-3'
            type="text" placeholder='username' value={username} onChange={(e)=>setUsername(e.target.value)}/>
        <input className='border border-blue-700 px-3' type="text" placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <button 
            className='border border-blue-700 px-3'
            onClick={handlesubmit}>Login</button>
        </div>
    )
}