import React from 'react'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'
function App() {

  return (
    <>
      <div className='text-center text-3xl bg-black text-white py-3'>TODO LIST</div>
      <AddTodo/>
      <TodoList/>
    </>
  )
}

export default App
