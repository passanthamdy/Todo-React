import React from 'react'
import {ReactComponent as Add} from '../assets/add.svg'
import { NavLink } from "react-router-dom";


function AddTodo() {
  return (
    <div>
      <NavLink to={'/todos/add'} className="floating-button">
          <Add></Add>
      </NavLink>
    </div>
  )
}

export default AddTodo
