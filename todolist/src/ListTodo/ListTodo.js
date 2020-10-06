import React from "react";
import "./ListTodo.css";
import { GiCrossMark } from "react-icons/gi";

const ListTodo = ({ inputText, deleteItem }) => {
  return (
    <li className='list'>
      {inputText}{" "}
      <span onClick={deleteItem} className='delete' className='cross'>
        <GiCrossMark />
      </span>
    </li>
  );
};

export default ListTodo;
