import React from 'react'
import {useState ,useEffect} from 'react'

function TodoList() {
  let [notes, setNotes]=useState([])
  let [errMsg]=useState("")
  
  useEffect(() => {
    fetch('/api/todos')
    .then((response)=>{return response.json()})
    .then((data)=>{setNotes(data)})
    .catch((err)=>{console.log('error')})
  }, []);
  let renderTodos = ()=>{
    if(notes.length>0){

      return notes.map((note, index)=>{
   

          return (
            
             
              <div>
                <h3>{note.title}</h3>
                 <p> {note.body}</p> 
              </div>
       
              )
          })
  }else if(errMsg){
      return (<h1>Check ur Internet Connection</h1>)
  }else{
      return (<h1>Getting Data...</h1>)
  }
}
  return (
    <div>
       <div>
                <h3>My tasks to do </h3>
              </div>
      {renderTodos()}
      </div>
  )
}

export default TodoList