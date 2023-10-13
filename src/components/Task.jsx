import React from 'react'

const Task = (props) => {
    const task = props.task;
    return (
    <div>
      {
        task.task
      }
    </div>
  )
}

export default Task
