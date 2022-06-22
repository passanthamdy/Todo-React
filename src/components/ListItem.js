import React from 'react'


function ListItem({todo}) {
    let getTime=()=>{
        return new Date(todo.updated_at).toLocaleDateString()
      }
      const s = {
        textDecoration: todo.state ? "line-through" : "none",
      };
  return (
    <div className='todos-list-item'>
        <h3 style={s}>{todo.title}</h3>
        <p> <span> {getTime()} </span> </p>
    </div>
  )
}

export default ListItem