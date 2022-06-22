import React from 'react'


function ListItem({todo}) {
    let getTime=()=>{
        return new Date(todo.updated_at).toLocaleDateString()
      }
  return (
    <div className='todos-list-item'>
        <h3>{todo.title}</h3>
        <p>{todo.body}</p>
        <p> <span> {getTime()} </span> </p>
    </div>
  )
}

export default ListItem