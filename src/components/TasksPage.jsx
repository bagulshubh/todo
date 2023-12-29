import { useState,useEffect } from 'react'
import Input from './Input'
import TaskCon from './TaskCon'
import CompletedTask from './CompletedTask'

function TasksPage(props) {

    const cdata = props.cdata;
    const data = props.data;
    const getdata = props.getdata;
    const id = props.id;

  return (

    <div className='TaskPage'>
      <Input getdata={getdata} id={id}></Input>
      <TaskCon data={data} getdata={getdata} id={id}></TaskCon>
      <CompletedTask cdata={cdata} getdata= {getdata} id={id}></CompletedTask>
    </div>

  )
}

export default TasksPage
