import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
        <div>
            <div>       
            </div>
            <h1>{todo.title} </h1>
            <div>
              {todo.body} 
              <br/>
              {todo.created_at}
               
            </div>
         
        </div>
      );
    
  };







  return <div> 
    {renderTodoObj()}
    </div>;
}

export default Todo;
