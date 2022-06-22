import React from "react";
import { useState, useEffect } from "react";
import ListItem from "../components/ListItem";
import { NavLink } from "react-router-dom";
import AddTodo from "../components/AddTodo";
import {ReactComponent as Check} from '../assets/check.svg'

function TodoList() {
  let [todos, setTodos] = useState([]);
  useEffect(() => {
    getTodos()
  }, []);
let getTodos=()=>{
  fetch("/api/todos")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setTodos(data);
      })
      .catch((err) => {
        console.log("error");
      });
}
  let renderTodos = () => {
    
    if (todos.length > 0) {
      return todos.map((todo) => {
        let url='/todos/'+todo.id;
       
  let finishTodo = async () => {
    fetch(`/api/todos/${todo.id}`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
       
    }).then(()=>{getTodos()})
    .catch((err)=>{console.log('finish error')})
}

        return (
          <div className="todos">
            <div key={todo.id} className="todos-list">
           
                <Check onClick={finishTodo} className='checkicon'></Check>
                 <NavLink to={url}>
                  <ListItem  todo={todo}></ListItem>
                  </NavLink>
            </div>
          </div>
        );
      });
    } else {
      return <h1>Getting Data...</h1>;
    }
  };
  return (
    <div>
       <div className='todo-header'>
       <h3>&#9782; To do tasks </h3>
                <p className='notes-count'> {todos.length} </p>
      </div>
      
      {renderTodos()}
      <AddTodo></AddTodo>
    </div>
  );
}

export default TodoList;
