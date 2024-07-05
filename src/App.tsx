import { useState, useEffect } from 'react'
import './App.css'


interface TASK {
  prompt: string,
  category: string
}

interface DATA {
  tasks: Array<TASK>
}

function App() {

  const [tasks, setTasks] = useState<TASK[]>([])

  useEffect(
    () => {
      getTasks()
    },
    [])

  const getTasks = async () => {
    try {
      let resp = await fetch("../tasks.json");
      let data: DATA = await resp.json();
      data && setTasks(data.tasks);

    } catch {
      console.log('Failed Load');
    }
  }

  return (
    <>
      <header>
        <h1>Adventure App</h1>
        <h3>Tasks to display:</h3>
      </header>
      <main>
        {
          tasks.map(
            (task, index) => (
              <div key={index}>
                <p><b>{task.category}:</b> {task.prompt}</p>
              </div>
            )
          )
        }
      </main>
    </>
  )
}

export default App
