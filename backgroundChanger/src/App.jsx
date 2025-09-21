import React from 'react'
import { useState } from 'react'

function App() {
  const [color, setColor] = useState("white")

  return (
    <>
    <div className='w-screen h-screen transition-color duration-200' style={{backgroundColor: color}}>
      <div className='flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button onClick={()=> setColor('red')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: 'red'}}>red</button>
          <button onClick={()=> setColor('blue')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: 'blue'}}>blue</button>
          <button onClick={()=> setColor('green')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: 'green'}}>green</button>
          <button onClick={()=> setColor('yellow')} className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{backgroundColor: 'yellow'}}>yellow</button>
          <button onClick={()=> setColor('black')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: 'black'}}>black</button>
          <button onClick={()=> setColor('purple')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: 'purple'}}>purple</button>
          <button onClick={()=> setColor('olive')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: 'olive'}}>olive</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
