import React, { useEffect, useState } from "react";
import Header from './Components/Header'
import Card from './Components/Card'
import "./App.css";
import { getAllTodo, addTodo, updateTodo, deleteTodo } from "./utils/HandleApi";
import AddBlog from "./Components/AddBlog";
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
      <div>
        <Header/>
        <AddBlog/>
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
        
        <div className='cards'>
          {todo.map((item) => (
            <Card
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
  );
}

export default App;