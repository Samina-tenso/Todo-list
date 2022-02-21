import React from "react"

export default function Task({ task, index, completeTask, removeTask }) {
    return (
        <div className="task"
            style={{ textDecoration: task.completed ? "line-through" : "" }}>
            {task.title}
            <button className="remove" onClick={() => removeTask(index)}>x</button>
            <button onClick={() => completeTask(index)}>Completed</button>
        </div>
    );
}