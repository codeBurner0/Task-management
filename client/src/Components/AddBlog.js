import './AddBlog.css'
import React ,{ useEffect, useState } from 'react'
import { getAllTodo, addTodo, updateTodo } from "../utils/HandleApi";
import {useLocation} from 'react-router-dom'
export default function AddBlog() {


  useEffect(() => {
    getAllTodo(setTodo);
    updateMode(_id,uptext,updescription,img,isUpdate)
  }, []);

  const location=useLocation();
  const isUpdate=location.state?.isUpdating;
  const _id=location.state?._id;
  const uptext=location.state?.text;
  const updescription=location.state?.description;
  const img=location.state?.image;

  const updateMode = (_id, text, description,image,isUpdating) => {
    setTodoId(_id);
    setText(text);
    setDescription(description);
    setImage(image);
    setIsUpdating(isUpdating)
  };

  const [todo, setTodo] = useState([]);
  const [text, setText] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [todoId, setTodoId] = useState("");
  const [isUpdating, setIsUpdating] = useState(true);
  return (
    <div className='parent'>
      <div className='addblogmain'>
        <div className='hclass'>
          <h1>Add Blog</h1> <br/>
        </div>
        <div>
        <form className='form1'>
            <label for="title" ><b>Blog Title:</b></label><br/>
            <input style={{margin:'5px'}} type="text" id="title" name="title" value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}/><br /><br/>

            <label ><b>Blog Description:</b></label><br />
            <input type="text" style={{margin:'5px'}} value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}/><br/><br></br>
            <label ><b>Add Image:</b></label>
            <input style={{margin:'5px'}} type="text" value={image}
            onChange={(e) => {
               setImage(e.target.value);
            }} /> <br /> <br />
          </form>
             
        </div>

        <div className='button-parent'>
        <div className='create-blog button' onClick={
        isUpdating
                ? () =>
                    updateTodo(
                      todoId,
                      text,
                      description,
                      setDescription,
                      setText,
                      setTodo,
                      setIsUpdating,
                      image,
                      setImage
                    )
                : 
                () =>
                    addTodo(text, description,image,setImage, setDescription, setText, setTodo)
                  }>{isUpdating?"Update":"Add"}</div>
        </div>
      </div>
       
    </div>
  )
}