import React, { useState } from 'react';
import './App.css';



export interface ToDo {
  text: string;
  timeFrame: number;
  completed: boolean;

}

export interface Props {
  toDo: ToDo;
}



function App() {
const [task, setTask] = useState<string>("")
const [deadline, setDeadline] =useState<number>(0)
const [complete, setComplete] = useState<boolean>(false)
const [toDo, setToDo] = useState<ToDo[]>([])

const handleSubmit = () => {
  const newArr: ToDo[] = [...toDo]
  newArr.push({
    text: task,
    timeFrame: deadline,
    completed: false,
    })
console.log('newArr: ', newArr)
    setToDo([...newArr])
  // setToDo([...toDo, {
  //   text: task,
  //   timeFrame: deadline,
  //   completed: false,
  //   }])
  setDeadline(0)

  setTask("")

}

//TODO: Complete handler
// determine which checkbox you clicked to set it's state to Complete, then reupdate your todo array

console.log({toDo})

  return (
    <div className="App">
      <h1>This is my Typescript To-Do List</h1>
      <div>
    
        <input 
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add to list..."/>
        <input 
        type="number" 
        placeholder="Deadline in days" 
        value={deadline} 
        onChange={(e) => setDeadline(Number(e.target.value))}/>

        <button 
        onClick={handleSubmit}
        type="submit">Add</button>
      </div>
      <div>
        <h3>To-Do Items:</h3>
          <ul>
            {toDo.map(item => {
              return (
                <div>

                <input type="checkbox" checked={complete} onChange={(e) => setComplete(e.target.checked)}/>
                <span>{item.timeFrame}</span>
                <span>{item.text}</span>
                </div>
              )
            })}
          </ul>
      </div>
    </div>
  );
}

export default App;
