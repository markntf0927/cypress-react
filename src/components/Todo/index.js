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

      {/* {todo.length > 0 &&
        todo.map((itm, idx) => (
          <div className="todo" key={idx}>
            <p className="small">Todo #{itm.id}</p>
            <div className="todo__inner">
              <p className="todo__content small">Content: {itm.content}</p>
            </div>
            <button onClick={() => removeTodo(itm.id)}>Remove</button>
          </div>
        ))} */}

      {!showTodoInput && (
        <button onClick={handleShowTodoInput}>Add a todo</button>
      )}

      {showTodoInput && (
        <>
          <div>
            <input value={newTodo} onChange={handleNewTodo} />
            <button onClick={addTodo}>Add</button>
            <button onClick={handleShowTodoInput}>Back</button>
          </div>

          {error && <p className="small error">Please fill your todo</p>}
        </>
      )}
    </section>
  )
}

export default memo(Todo)
