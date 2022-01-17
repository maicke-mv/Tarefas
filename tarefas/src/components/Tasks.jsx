import React from 'react'
import Task from '../components/Task'

const Tasks = ({ tasks, handleTaskClick, handleTaskDelete }) => {
    return(
        <>
            {tasks.map(task => <Task task={task} handleTaskClick={handleTaskClick} handleTaskDelete={handleTaskDelete}/>)}
        </>
    )
}

export default Tasks