import './App.css';
import React,{useState} from 'react';
import CourseForm from './Components/CourseForm';
import CourseList from './Components/CourseList';
function App() {
  const [list,setList] = useState([
    {id :1 , text : 'Learn React'},
    {id :2 , text :'Master React'}
  ]);
  function handleNewEntry(NewValue){
    const NewItem = {
      id : Math.random(),
      text : NewValue
    }
    setList(prevList => [...prevList,NewItem])
  }
  function handleClick(DelId){
    setList(prevList =>{
      return prevList.filter(item => item.id !==DelId)
    });
  }
  return (
    <div className="App">
      <CourseForm onNewEntry = {handleNewEntry}/>
      <CourseList list = {list} onClick = {handleClick}/>
    </div>
  );
}

export default App;
