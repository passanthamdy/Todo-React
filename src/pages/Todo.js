import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import {ReactComponent as LeftArrow} from '../assets/left-arrow.svg'

function Todo() {
  let { id } = useParams();
  let [todo, setTodo] = useState({});

  console.log(id)
  useEffect(() => {
    fetch(`/api/todos/${id}`)
      .then((response) => {return response.json();})
      .then((data) => { setTodo(data)  })
      .catch((err) => { 
      });
  }, [id]);


  let renderTodoObj = () => {
    
      return (
        <div className="todo">
            <div className="todo-header">      
            <h3>
                <NavLink to={'/'}>
                    <LeftArrow  onClick={handleSubmit}></LeftArrow> 
                </NavLink>
                 </h3>
                 {id !== 'add' ? (
                   <NavLink to={'/'}>
                    <button onClick={deleteTodo}>Delete</button>
                    </NavLink>
                ) : (
                  <NavLink to={'/'}>
                    <button onClick={handleSubmit} >Done</button>
                    </NavLink>
                )}
            </div>
            <div className="cont">
            <input placeholder="title" defaultValue={todo?.title} onChange={(e) => {
                        setTodo({...todo,'title': e.target.value})
                    }}
                    type="text"></input>
                <textarea placeholder="type the body" onChange={(e)=>{setTodo({...todo,'body': e.target.value})}}
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
let createTodo = async () => {
    fetch(`/api/todos`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(todo)
    }).catch((err)=>{
        console.log('post error:' ,err)
    })
    }

    let handleSubmit =()=>
    {
       if(id !== 'add'){
        updateTodo()
     }else if(id ==='add' && todo.body && todo.title ) {
        console.log('create')
      createTodo()
     }else{

     }
    }

  return <div> 
    {renderTodoObj()}
    </div>;
}

export default Todo;
