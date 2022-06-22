import React from "react";
import { useState, useEffect } from "react";
import ListItem from "../components/ListItem";
function TodoList() {
  let [todos, setTodos] = useState([]);
  let [errMsg] = useState("");

  useEffect(() => {
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
  }, []);
  let renderTodos = () => {
    if (todos.length > 0) {
      return todos.map((todo) => {
        return (
          <div className="todos">
            <div key={todo.id} className="todo-list">
              <ListItem todo={todo}></ListItem>
            </div>
          </div>
        );
      });
    } else if (errMsg) {
      return <h1>Check ur Internet Connection</h1>;
    } else {
      return <h1>Getting Data...</h1>;
    }
  };
  return (
    <div>
       <div className='todos-header'>
        <h3>My tasks to do </h3>
      </div>
      {renderTodos()}
    </div>
  );
}

export default TodoList;
