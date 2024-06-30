import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [tasks, setTasks] = useState([])

  //TODO Figure out how to fetch json data
  // fetch("./src/users.json")
  //   .then(resp => console.log(resp))
  // ;
  useEffect(()=>{
  fetch("http://localhost:3000/tasks")
  .then(response => response.json())
  .then(data => setTasks(data))
  }, [])

  console.log(tasks)
  return (
    <>
      <h1>Task To Do</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
