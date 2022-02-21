
import Task from "./Tasks.jsx"
import React, { useState } from "react"




export default function Todo() {
    const [tasks, setTasks] = useState([
        {
            title: "Do work",
            completed: false
        },
        {
            title: "Eat food",
            completed: true
        }
    ])
    return (
        <div className="todo-container">
            <div className="header"> ToDo Items</div>
            <div className="tasks">
                {tasks.map((task, index) => (
                    <Task
                        task={task}
                        index={index}
                        key={index} />
                ))}
            </div>
        </div>
    )
}




