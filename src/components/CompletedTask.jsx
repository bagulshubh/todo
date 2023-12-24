import React from 'react'
import Task from './Task';

const CompletedTask = (props) => {

    const cdata = props.cdata;
    const getdata = props.getdata;

  return (
    <div className='task-con-comp'>
    {
      cdata.length===0 ? (<div></div>) : (
      cdata.map( (task)=>(
          <Task task={task} comp={true} getdata={getdata}></Task>    
      ) ) )
    }
  </div>
  )
}

export default CompletedTask
