import './App.css';
import { HashRouter, Route, Routes } from "react-router-dom";
import Header from './components/Header'
import TodoList from './pages/TodoList'



function App() {
  return (
    <HashRouter>
    <div>
      <div>
    <Header/>
    <Routes>
        <Route path="/" element={<TodoList/>}/>
        <Route path="/todos" element={<TodoList/>}/>
     
    </Routes>
    </div>
    </div>
</HashRouter>
  );
}

export default App;
