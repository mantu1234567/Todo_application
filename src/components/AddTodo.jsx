import { useState } from "react";


function AddTodo({onAddTodo}) {
  const [todoText, setTodoText] = useState("");
  const [todoDate, setTodoDate] = useState("");

  const handleAddClick = () => {
    if (todoText && todoDate) {
      onAddTodo({
        text: todoText,
        date: todoDate,
      });
      // Clear inputs after adding
      setTodoText("");
      setTodoDate("");
    } else {
      alert("Please enter both text and date.");
    }
  };
  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-6">
        <input
            type="text"
            placeholder="Enter Todo Here"
            value={todoText}
            onChange={(e) => setTodoText(e.target.value)}
          />
        </div>
        <div className="col-4">
        <input
            type="date"
            value={todoDate}
            onChange={(e) => setTodoDate(e.target.value)}
          />
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success kg-button" onClick={handleAddClick}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
