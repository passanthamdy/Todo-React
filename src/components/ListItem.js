import React from 'react'

function ListItem({todo}) {
  return (
    <div>
        <h3>{todo.title}</h3>
        <p>{todo.body}</p>
        <p> {todo.created_at} </p>
    </div>
  )
}

export default ListItem