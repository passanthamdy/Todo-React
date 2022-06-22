import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './components/Header'
import TodoList from './pages/TodoList'
import Todo from './pages/Todo';


function App() {
  return (
    <BrowserRouter>
    <div className='container'>
      <div className='app'>
    <Header/>
    <Routes>
        <Route path="/" element={<TodoList/>}/>
        <Route path="/todos" element={<TodoList/>}/>
        <Route path="/todos/:id" element={<Todo/>}/>


     
    </Routes>
    </div>
    </div>
</BrowserRouter>
  );
}

export default App;
