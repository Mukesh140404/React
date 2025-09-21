import { useState } from 'react'
import './App.css'

function App() {
  let [count, setCount] = useState(0)
  const Increment = () => {
    if(count >= 20) return
    setCount(count + 1)
  }
  const Decrement = () => {
    if(count <= 0) return
    setCount(count - 1)
  }
  return (
    <>
    <h1>Counter Application</h1>
    <h1>{count}</h1>
    <button onClick={Increment}>Increment</button><br/><br/>
    <button onClick={Decrement}>Decrement</button>
      </>
  )
}

export default App
