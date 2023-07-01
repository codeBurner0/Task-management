import './AddBlog.css'
import React ,{ useEffect, useState } from 'react'
import { getAllTodo, addTodo, updateTodo, deleteTodo } from "../utils/HandleApi";

export default function AddBlog() {

  useEffect(() => {
    getAllTodo(setTodo);
  }, []);

  const [todo, setTodo] = useState([]);
  const [text, setText] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [todoId, setTodoId] = useState("");

  return (
    <div className='parent'>
      <div className='addblogmain'>
        <div className='hclass'>
          <h1>Add Blog</h1><br />
        </div>

        <div>
        <form className='form1'>
            <label for="title" ><b>Blog Title:</b></label><br />
            <input style={{margin:'5px'}} type="text" id="title" name="title"  rows={5} cols={55} value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}/><br /><br/>

            <label ><b>Blog Description:</b></label><br />
            <textarea style={{margin:'5px'}} rows={5} cols={55} value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}>Content Here...</textarea><br/><br></br>

            <label ><b>Add Image:</b></label>
            <input style={{margin:'5px'}} rows={5} cols={55} type="text" value={image}
            onChange={(e) => {
               setImage(e.target.value);
            }} /> <br /> <br />
          </form>
             
        </div>
        <button className='button1' onClick={() =>
                    addTodo(text, description,image,setImage, setDescription, setText, setTodo)}><h2>Add</h2></button>
      </div>
       
    </div>
  )
}