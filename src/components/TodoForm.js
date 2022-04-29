import React, { useState, useRef, useEffect } from 'react'

function TodoForm({onSubmit, edit}) {
    const [input, setInput] = useState(edit ? edit.value : '')
    function handleChange(e) {
        setInput(e.target.value)

    }


    useEffect(() => {
        inputRef.current.focus()
    },[])
    const inputRef = useRef(null)

    function handleSubmit (e) {
        e.preventDefault()

        onSubmit({
            id : Math.floor(Math.random() * 10000),
            isComplete : false,
            text : input
        })
        setInput('')
    }



    return (
            <form className='todo-form'  onSubmit={handleSubmit}>
                {edit ? (<>
                        <input ref={inputRef} name='text' className='todo-input edit' placeholder='Update' value={input} onChange={handleChange}  />
                        <button className='todo-button' type='submit'>Save changes</button>
                        </>)
                        : 
                        (<>
                        <input ref={inputRef} name='text' className='todo-input' placeholder='Write a todo' value={input} onChange={handleChange}  />
                        <button className='todo-button' type='submit'>Add a todo</button>
                        </>
                        )}
            </form>
  )
}

export default TodoForm