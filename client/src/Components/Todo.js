import React, { useState } from "react";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { BiTask } from "react-icons/bi";
import { BiTaskX } from "react-icons/bi";
import { GoArrowRight } from "react-icons/go";
function Todo({ text, description, updateMode, deleteTodo }) {
  const [line, setLine] = useState(false);
  function changer() {
    setLine(!line);
  }
  return (
    <div className="todo">
      <span className="icon1">{line?<BiTask />:<BiTaskX/>}</span>
      <span
        className="text"
        onClick={changer}
        style={{ textDecoration: line ? "line-through" : "none" }}
      >
        {text}
      </span>
      <div className="icons">
        <BiEdit className="icon" onClick={updateMode} />
        <AiFillDelete className="icon" onClick={deleteTodo} />
      </div>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <GoArrowRight className="arrow" />
      <span className="desc">{description}</span>
      
    </div>
  );
}

export default Todo;
