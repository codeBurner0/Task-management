import React, { useEffect, useState } from "react";
import "./App.css";
import Todo from "./Components/Todo";
import { getAllTodo, addTodo, updateTodo, deleteTodo } from "./utils/HandleApi";
function App() {
  const [todo, setTodo] = useState([]);
  const [text, setText] = useState("");
  const [description, setDescription] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [todoId, setTodoId] = useState("");

  useEffect(() => {
    getAllTodo(setTodo);
  }, []);

  const updateMode = (_id, text, descript) => {
    setIsUpdating(true);
    setDescription(descript);
    setText(text);
    setTodoId(_id);
  };

  return (
    <div className="app">
      <div className="container">
        <h1 className="task">Task Management</h1>
        <div className="top">
          <input
            type="text"
            placeholder="Enter your task.."
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Enter your description.."
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
          <div
            className="add"
            onClick={
              isUpdating
                ? () =>
                    updateTodo(
                      todoId,
                      text,
                      description,
                      setDescription,
                      setText,
                      setTodo,
                      setIsUpdating
                    )
                : () =>
                    addTodo(text, description, setDescription, setText, setTodo)
            }
          >
            {isUpdating ? "Update" : "Add"}
          </div>
        </div>
        <div className="list">
          {todo.map((item) => (
            <Todo
              key={item._id}
              text={item.text}
              description={item.description}
              updateMode={() =>
                updateMode(item._id, item.text, item.description)
              }
              deleteTodo={() => deleteTodo(item._id, setTodo)}
              // striker={()=>striker}
            />
          ))}
        </div>
      </div>
      </div>
  );
}

export default App;

//false: isUpdating updatemode(true)
