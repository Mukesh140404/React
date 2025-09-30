import React,{ useEffect, useState } from 'react'
import { ThemeProvider } from './context/Theme'
import ThemeBtn from './components/Themebtn'
import Card from './components/Card'
import './App.css'

function App() {
  const [themeMode,setThemeMode] = useState("light")
  const lightTheme=()=>{
    console.log(themeMode)
    setThemeMode("light")
  }
  const darkTheme=()=>{
    console.log(themeMode)
    setThemeMode("dark")
  }

  useEffect(()=>{
    document.querySelector('html').classList.remove("light","dark")
    document.querySelector('html').classList.add(themeMode)
  },[themeMode])

  return (
    <ThemeProvider value={{themeMode,darkTheme,lightTheme}}>
    
    <div className="flex flex-wrap min-h-screen items-center">
      <div className="w-full">
        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn/>
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card/>     
          </div>
        </div>
      </div>

    </ThemeProvider>
  )
}

export default App
