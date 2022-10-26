import React,{useState} from "react";
import './CourseForm.css';
export default function CourseForm(props) {
  const [val,setVal] = useState("");  
  function handleSubmit(event) {
    event.preventDefault();
    props.onNewEntry(val);
    setVal("");
  }
  function handleChange(event){
    setVal(event.target.value);
  }
  return (
    <div className="card container">
      <form onSubmit={handleSubmit}>
        <label><h1>Course Goal</h1></label>
        <input type = "text"  value = {val} onChange = {handleChange}></input>
        <button type = "submit" >
          Add Goal
        </button>
      </form>
    </div>
  );
}
