import React, {useState} from 'react'

import './App.css'
import AddTask from '../components/AddTask'
import Tasks from '../components/Tasks'
import Header from '../components/Header'


const App = () => {
  const [tasks, setTasks] = useState([
    {
    id: 1,
    title: 'Estudar Programação',
    completed: false
  }
])

  const handleTaskClick = (taskId) => {
    const newTask = tasks.map(task => {
      if(task.id === taskId) return {
        ...task, completed: !task.completed
      }
      return task
    })
    setTasks(newTask)
  }

  const handleTaskAddition = (taskTitle) => {
    const newTasks = [...tasks, {
      title: taskTitle,
      id: Math.random(10),
      completed: false
    }]
    setTasks(newTasks)
  }

  const handleTaskDelete = (taskId) => {
    const newTask = tasks.filter((task) => task.id !== taskId)
    setTasks(newTask)
  }

  return(
    <>
      <div className='container'>
        <Header />
        <AddTask handleTaskAddition={handleTaskAddition}/>
        <Tasks tasks={tasks} handleTaskClick={handleTaskClick} handleTaskDelete={handleTaskDelete}/>
      </div>
    </>
  )
}

export default App
