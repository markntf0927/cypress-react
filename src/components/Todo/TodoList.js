import React, { memo } from 'react'

function TodoList({ todo, removeTodo }) {
  return (
    <>
      {todo &&
        todo.length > 0 &&
        todo.map((itm, idx) => (
          <div className="todo" key={idx}>
            <p className="todo__id small">Todo #{itm.id}</p>
            <div className="todo__inner">
              <p className="todo__content small">Content: {itm.content}</p>
            </div>
            <button data-cy-id={itm.id} className="remove-btn" onClick={() => removeTodo(itm.id)}>Remove</button>
          </div>
        ))}
    </>
  )
}

export default memo(TodoList)
