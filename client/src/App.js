import React, { useEffect, useState } from "react";
import "./App.css";
import Todo from "./Components/Todo";
import { getAllTodo, addTodo, updateTodo, deleteTodo } from "./utils/HandleApi";
function App() {
  const [todo, setTodo] = useState([]);
  const [text, setText] = useState("");
  const [image, setImage] = useState("");
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
        <div className="task"><span>Task</span> <span>Management</span></div>
        <div className="top">
          <input
          className="input"
            type="text"
            placeholder="Enter your task.."
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
          <input
          className="input"
            type="text"
            placeholder="Enter your description.."
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
          <input
          className="input"
            type="text"
            placeholder="Enter your image link.."
            value={image}
            onChange={(e) => {
              setImage(e.target.value);
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
                    addTodo(text, description,image,setImage, setDescription, setText, setTodo)
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
              image={item.image}
              updateMode={() =>
                updateMode(item._id, item.text, item.description)
              }
              deleteTodo={() => deleteTodo(item._id, setTodo)}
            />
          ))}
        </div>
      </div>
      </div>
  );
}

export default App;