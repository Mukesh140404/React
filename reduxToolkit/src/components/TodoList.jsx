import React from  'react'
import { useSelector ,useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'

export default function TodoList(){
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()
    return(
        <>
        <div className='w-3/4 mx-auto shadow-lg rounded-lg p-4 bg-yellow-100 max-h-[600px] overflow-y-scroll overflow-x-hidden'>
        {todos.map((todo)=>(
            <div key={todo.id} 
                className='bg-red-400 text-white rounded-lg px-4 py-2 flex justify-between my-2'
            >
                <div>{todo.text}</div>
                <button onClick={()=> dispatch(removeTodo(todo.id))}>X</button>
            </div>
        ))}</div>
        </>
    )
}