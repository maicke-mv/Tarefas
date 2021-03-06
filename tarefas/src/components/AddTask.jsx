import React, {useState} from 'react'
import './AddTask.css'
import Button from '../components/Button'

const AddTask = ({handleTaskAddition}) => {
    const [inputData, setInputData] = useState('')

    const handleInputChange = (e) => {
        setInputData(e.target.value)
    }

    const handleAddTaskClick = () => {
        handleTaskAddition(inputData)
        setInputData('')
    }
    return(
        <div className="add-task-container">
            <input className="add-text-input" type="text" onChange={handleInputChange} value={inputData} />
            <div className="add-task-button"><Button onClick={handleAddTaskClick}>Adicionar</Button></div>
        </div>
    )
}

export default AddTask