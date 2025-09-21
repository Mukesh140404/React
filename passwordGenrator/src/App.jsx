import React, { useCallback, useEffect, useRef } from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [Length, setLength] = useState(12)
  const [NumAllow, setNumAllow] = useState(false)
  const [CharAllow, setCharAllow] = useState(false)
  const [Password, setPassword] = useState('')
  const passRef = useRef(null)

 const copyToClipboard = useCallback(()=>{
  passRef.current?.select()
  window.navigator.clipboard.writeText(Password)
 },[Password])

  const generatePassword = useCallback(()=>{
    let pass = ''
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if(NumAllow) str += "0123456789"
    if(CharAllow) str += "!@#$%^&*()_+"
    for(let i=1 ;i<=Length;i++){
      let char = Math.floor(Math.random()*str.length+1)
      pass += str.charAt(char)
      setPassword(pass)
    }
  },[Length,NumAllow,CharAllow,setPassword])

  useEffect(()=>{
    generatePassword()
  },[Length,NumAllow,CharAllow,generatePassword])
  return (
    <>
      <div className='flex flex-col items-center justify-center min-h-screen bg-slate-900 text-white'>
        <div className='flex flex-col items-center space-y-6 bg-gray-700 p-8 rounded-lg shadow-lg'>
        <div className='text-3xl font-bold mb-4'>Password Generator</div>
        <div className='flex'>
          <input type='text' value={Password} className='px-4 py-2 bg-gray-800 text-gray-300 w-96 outline-none' ref={passRef}/>
          <button className='px-4 py-2 bg-green-500 hover:bg-green-600' onClick={copyToClipboard}>Copy</button>
        </div>
        <div className='flex space-x-2'>
          <input type="range" min={8} max={20} defaultValue={12} onChange={(e) => setLength(e.target.value)}/>
          <label htmlFor="range">Length {Length}</label>
          <div>
          <input type="checkbox" defaultChecked={NumAllow} id="NumberAllowed" onChange={(e) => setNumAllow((prev)=>!prev)} />
          <label htmlFor="NumberAllowed">NumberAllowence</label></div>
          <div>
          <input type="checkbox" defaultChecked={CharAllow} id="charAllowed" onChange={(e) => setCharAllow((prev)=>!prev)} />
          <label htmlFor="charAllowed">CharAllowence</label></div>
        </div>
        </div>
      </div>
    </>
  )
}

export default App
