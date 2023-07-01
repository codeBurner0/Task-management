import React, { useState } from "react";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import './Card.css'
function Card({ text, description,image, updateMode, deleteTodo }) {
  const [line, setLine] = useState(false);
  function changer() {
    setLine(!line);
  }
  return (
    <div className="card">
      <img className="image" src={image} alt="" style={{width:"280px"}}/>
      <h1>{text}</h1>
          <h3>{description}</h3>
          <div>
          <div className='create-blog'>Update Blog</div>
          <div className='create-blog'>Delete Blog</div>
          </div>
            <div className="icons">
              <BiEdit className="icon" onClick={updateMode} />
              <AiFillDelete className="icon" onClick={deleteTodo} />
            </div>
          </div>
  );
}

export default Card;
