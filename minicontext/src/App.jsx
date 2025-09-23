import React ,{ useState } from 'react'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {

  return (
    <UserContextProvider>
    <h1 className='text-4xl text-center text-blue-700 bg-pink-300'>Hello Context Api</h1>
    <Login/>
    <Profile/>
    </UserContextProvider>
  )
}

export default App
