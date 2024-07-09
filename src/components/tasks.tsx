import { useState, useEffect } from 'react'
import { TASK, DATA } from "../util/types";


function Tasks() {


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
    )

}

export default Tasks