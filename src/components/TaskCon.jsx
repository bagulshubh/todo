import React, { useEffect, useState } from 'react'
import Task from './Task';

const TaskCon = (props) => {
    const data = props.data;
    const getdata = props.getdata;

  return (
    <div className='task-con'>
      {
        data.length===0 ? (<div></div>) : (
        data.map( (task)=>(
            <Task task={task} getdata={getdata}></Task>    
        ) ) )
      }
    </div>
  )
}

export default TaskCon
