import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [todo, setTodo] = useState([""])
  const [task,setTask]=useState("")
  const[status,setStatus] = useState("completed")
  const[date,setDate] = useState (new Date())
  //const[history,setHistory] = useState
  return (
    <>
      <div className='App'>
        <form onSubmit={(event)=>{
          event.preventDefault();
          setTodo([
            ...todo,{
              task : task,
              status : status,
              date : date
            }
          ])
        }}>
          <input type="text"
          required
          value={task}
          onChange={(event)=>{
            setTask(event.target.value)
          }} />
          <select required
          value={status}
          onChange={(event)=>
          setStatus(event.target.value)}>
            <option value="Completed">Completed</option>
            <option value="Incompleted">Incompleted</option>
            <option value="Pending">Pending</option>
          </select>
          <button type='Submit'
          >Submit</button>
        </form>
      </div>
      <div>
        {todo.map((todoItem)=>{
          return(
            <div key={todoItem} style={{display:'flex',gap:'20px'}}>
              <span>{todoItem.task}</span>
              <span>{todoItem.status}</span>
            </div>
          )
        })}
      </div>
          
    </>
  )
}

export default App
