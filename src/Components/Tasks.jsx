import React from "react"

export default function Task({ task, index, completeTask, removeTask }) {
    return (
        <div className="task"
        >


            <div style={{ textDecoration: task.completed ? "line-through" : "" }}>
                {task.title}
            </div>
            <button className="remove" onClick={() => removeTask(index)}>x</button>
            <button className="completed" onClick={() => completeTask(index)}>Completed</button>
        </div>
    );
}