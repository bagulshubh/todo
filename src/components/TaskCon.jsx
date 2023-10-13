import React, { useEffect, useState } from 'react'
import Task from './Task';

const TaskCon = () => {
    const [data,setdata] = useState([])

    useEffect(  async () => {
        const url  = 'http://localhost:5000/api/v1/getAllTask'
        const response = await fetch(url);
        const output = await response.json();
        setdata(output.body);
        console.log(output.body);  
    } ,[]);

  return (
    <div>
      {
        data.length===0 ? (<div></div>) : (
        data.map( (task)=>(
            <Task task={task}></Task>    
        ) ) )
      }
    </div>
  )
}

export default TaskCon
