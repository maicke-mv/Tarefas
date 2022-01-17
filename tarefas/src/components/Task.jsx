import React from 'react'
import './Task.css'

const Task = ({task, handleTaskClick, handleTaskDelete}) => {
    return(
        <div className="task-container" style={task.completed ? {borderLeft: "6px solid chartreuse"} : {}}>
            <div className="task-title" onClick={() => handleTaskClick(task.id)}>
                {task.title}
            </div>
            <button onClick={() => handleTaskDelete(task.id)} className="remove-task-button">X</button>
        </div>
    )
}

export default Task