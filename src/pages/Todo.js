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
                    back 
                </NavLink>
                 </h3>
             

                
            </div>
            <div>
                <input placeholder="title" defaultValue={todo?.title}  type="text"></input>

                <textarea defaultValue={todo?.body}>

                </textarea>
               
            </div>
         
        </div>
      );
    
  };







  return <div> 
    {renderTodoObj()}
    </div>;
}

export default Todo;
