import React from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'
import { useState } from 'react'

function TodoList() {

  const [todos,setTodos] = useState([])

  function addTodo (todo) {
      const newTodos = [...todos,todo]
      setTodos(newTodos)
      console.log(todo,...todos)
  }

  function removeTodo (id) {
    const removeArr = [...todos].filter((todo) => todo.id !== id)
    setTodos(removeArr)
  }

  function completeTodo (ida) {
    let updatedTodos = todos.map(todo => {
      if (todo.id === ida) {
        todo.isComplete = !todo.isComplete
      }
      return todo
    })
    setTodos(updatedTodos)
  }

  function updateTodo(todoId , newValue) {
    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))
  }




  return (
    <>
        <h1>What are the plans of today</h1>
        <TodoForm onSubmit={addTodo}/>
        <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo}/>
    </>
  )
}

export default TodoList