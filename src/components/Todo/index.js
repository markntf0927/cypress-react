import React, { useState, memo } from 'react'

import TodoList from './TodoList'

function Todo() {
  const defaultNewTodo = '';
  const [todo, setTodo] = useState([])
  const [showTodoInput, setTodoInput] = useState(false)
  const [newTodo, setNewTodo] = useState(defaultNewTodo)
  const [error, setError] = useState(false)

  const addTodo = () => {
    setError(false)

    if (!newTodo) return setError(true)

    const data = {
      id: todo.length + 1,
      content: newTodo,
    }

    setTodo([...todo, data])

    handleShowTodoInput()
    setNewTodo(defaultNewTodo)
  }

  const removeTodo = (todoId) => {
    const filtered = todo.filter((itm) => itm.id !== todoId)

    setTodo(filtered)
  }

  const handleShowTodoInput = () => {
    setError(false)
    setNewTodo(defaultNewTodo)

    setTodoInput(!showTodoInput)
  }

  const handleNewTodo = (evt) => {
    // evt.preventDefault()
    const { value } = evt.target

    setNewTodo(value)
  }

  return (
    <section>
      <h5>Todo Section</h5>

      <TodoList todo={todo} removeTodo={removeTodo} />

      {!showTodoInput && (
        <button className="show-btn" onClick={handleShowTodoInput}>Add a todo</button>
      )}

      {showTodoInput && (
        <>
          <div className="todo__input">
            <input type="text" className="todo-input" value={newTodo} onChange={handleNewTodo} />
            <button className="add-btn" onClick={addTodo}>Add</button>
            <button className="back-btn" onClick={handleShowTodoInput}>Back</button>
          </div>

          {error && <p className="small error">Please fill your todo</p>}
        </>
      )}
    </section>
  )
}

export default memo(Todo)
