import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Todo() {
  let { id } = useParams();
  let [todo, setTodo] = useState({});
  console.log(id)
  useEffect(() => {
    fetch(`/api/todos/${id}`)
      .then((response) => {return response.json();})
      .then((data) => { setTodo(data)  })
      .catch((err) => { console.log("error");});
  }, [id]);


  let renderTodoObj = () => {
    
      return (
        <div className="todo">
            <div className="todo-header">      
            <h3>
                <NavLink to={'/'}>
                    <p onClick={updateTodo}>update</p> 
                </NavLink>
                 </h3>
                 <NavLink to={'/'}>
                    <button onClick={deleteTodo}>Delete</button>
                    </NavLink>
            </div>
            <div>
            <input placeholder="title" defaultValue={todo?.title} onChange={(e) => {
                        setTodo({...todo,'title': e.target.value})
                    }}
                    type="text"></input>
                <textarea onChange={(e)=>{setTodo({...todo,'body': e.target.value})}}
                 defaultValue={todo?.body}>

                </textarea>
               
            </div>
         
        </div>
      );
    
  };


  let updateTodo = async () => {
    fetch(`/api/todos/${id}`, {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(todo)
    }).catch((err)=>{console.log('error')})
    console.log("body : ", todo.body)
}

let deleteTodo = async () => {
    console.log("note before delete", todo.body)
  fetch(`/api/todos/${id}`, {
      method: "DELETE",
      headers: {
          'Content-Type': 'application/json'
      },
  }).catch((err)=>{console.log('error')})
}


  return <div> 
    {renderTodoObj()}
    </div>;
}

export default Todo;
