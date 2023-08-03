import React, { useState } from 'react';
import './App.css';


interface ToDo {
  text: string;
 completed: boolean
}

function App() {
const [task, setTask] = useState<string>("")
// const [complete, setComplete] = useState<boolean>(false)
const [toDo, setToDo] = useState<ToDo[]>([])




  return (
    <div className="App">
      <h1>This is my Typescript To-Do List</h1>
      <div>
        {/* <input type="checkbox" value={complete}/> */}
        <input 
        value={task}
        placeholder="Add to list..."/>

        <button type="submit">Add</button>
      </div>
      <div>
        <h3>To-Do Items:</h3>
      </div>
    </div>
  );
}

export default App;
