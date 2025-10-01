import React, { useState } from  'react'
import { addTodo } from '../features/todo/todoSlice'
import {useDispatch} from 'react-redux'

export default function AddTodo(){
    const [input,setInput] = useState('')
    const dispatch = useDispatch()
    const addTodoHandler = (e) =>{
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }
    return(
        <>
        <form onSubmit={addTodoHandler}
                className='flex shadow-xl rounded-lg mx-auto my-4 w-3/4 bg-yellow-100'
                >
            <input type="text"
                    className='p-4 outline-none w-9/10'
                    placeholder='add here'
                    value={input}
                    onChange={(e)=>setInput(e.target.value)}
            />
            <button type='submit'
                    className='text-white bg-red-400 py-4 px-4 rounded-lg'>add</button>
        </form>
        </>
    )
}