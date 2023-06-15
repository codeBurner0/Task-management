import axios from "axios";
const baseUrl = "https://taskmanagement11.onrender.com";

const getAllTodo = (setTodo) => {
  axios
    .get(baseUrl)
    .then(({ data }) => {
      console.log(data);
      setTodo(data);
    })
    .catch((err) => {
      console.log(err.message);
    });
};

const addTodo = (text, description, setDescription, setText, setTodo) => {
  axios
    .post(`${baseUrl}/save`, { text: text, description: description })
    .then((data) => {
      console.log(data);
      setDescription("");
      setText("");
      getAllTodo(setTodo);
    })
    .catch((err) => {
      console.log(err.message);
    });
};

const updateTodo = (
  todoId,
  text,
  description,
  setDescription,
  setText,
  setTodo,
  setIsUpdating
) => {
  axios
    .post(`${baseUrl}/update`, {
      _id: todoId,
      text: text,
      description: description,
    })
    .then((data) => {
      console.log(data);
      setText("");
      setDescription("");
      setIsUpdating(false);
      getAllTodo(setTodo);
    })
    .catch((err) => console.log(err.message));
};

const deleteTodo = (_id, setTodo) => {
  axios
    .post(`${baseUrl}/delete`, { _id })
    .then((data) => {
      console.log(data);
      getAllTodo(setTodo);
    })
    .catch((err) => console.log(err.message));
};

export { getAllTodo, addTodo, updateTodo, deleteTodo };
