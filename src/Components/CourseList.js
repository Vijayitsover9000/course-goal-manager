import React from "react";
import './CourseList.css';
export default function CourseList(props) {
  function handleClick(event) {
    event.preventDefault();
    const delid = Number(event.target.getAttribute("value"));
    // console.log(typeof delid);
    props.onClick(delid);
  }
  return (
    <div className = 'list'>
      {props.list.map((item) => {
        return (
          <li className = 'list-item' key={item.id} onClick={handleClick} value={item.id}>
            {item.text}
          </li>
        );
      })}
    </div>
  );
}
