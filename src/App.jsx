import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";
import { useState } from "react";
import ErrorHandle from "./components/errorHandle";
function App() {
  const [todoItems,setTodoItems] = useState([]);
  const addItem = (newTodo)=>{
    setTodoItems((prevItems) => [...prevItems, newTodo]);
  }

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onAddTodo={addItem} />
      <TodoItems todoItems={todoItems}></TodoItems>
      <ErrorHandle todoItems={todoItems}/>
    </center>
  );
}

export default App;
