import { useEffect, useState } from 'react'
import {useDispatch} from 'react-redux'
import './App.css'
import authService from './appwrite/auth'
import {login,logout} from './features/authSlicer'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import {Outlet} from 'react-router'

function App() {
  const [loading,setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(()=>{
    authService .getCurrentUser()
    .then((userData)=> {
      if(userData){
        dispatch(login(userData))
      }
      else{
        dispatch(logout())
      }
    })
    .finally(()=> setLoading(false))
  },[])
  
  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400 text-red-600'>
      <div className='w-full block'>
        <Header/>
        <main>
          todo
          <Outlet/>
        </main>
        <Footer/>
      </div>
    </div>
  ) : null;

}

export default App
