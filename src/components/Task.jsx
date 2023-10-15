import React, { useState } from 'react'
import {RxPencil2} from 'react-icons/rx'
import {RiDeleteBin3Fill} from 'react-icons/ri'
import {toast} from 'react-hot-toast'

const Task = (props) => {
    const task = props.task;
    const getdata = props.getdata
    const [clicked,setclicked] = useState(false);
    const [value,setvalue] = useState(task.task);

    const deleteHandler = async()=>{
      const id = task._id;
      const data = {
        taskid:id
      }

      const  url = 'http://localhost:5000/api/v1/deleteTask';
      await fetch (url,
        {
          method:'DELETE',
          headers: {
            'Content-type': 'application/json'
          },
          mode:'cors',
          body:JSON.stringify(data)
        }
        )
        
        getdata();
        toast.error("Task Deleted Successfully")
    }

    const updateHandler = async()=>{
      setclicked(!clicked)
    }

    const changeHandler = (event)=>{
      setvalue(event.target.value);
    }

    const keyHandler = async(event)=>{
      if(event.key==='Enter'){
        const  data = {
          taskid:task._id,
          task:value
        }
        const api = 'http://localhost:5000/api/v1/updateTask'
        await fetch (api , {
          method:'PUT',
          headers: {
            'Content-type': 'application/json'
          },
          mode:'cors',
          body:JSON.stringify(data)
        }
        )
        task.task = value;
        setclicked(false);
        toast.success("Taks Updated Successfully")
      }
      
    }

    return (
    <div className='task'>
    {
      clicked  ? (
        <input type='text' value={value} onChange={changeHandler} onKeyDown={keyHandler}></input>
      ) : (<div className='task-name'>{task.task}</div>)
    }
      
      <div className='btn-con'>

        <RxPencil2 className='btn-new' onClick={updateHandler}></RxPencil2>
        <RiDeleteBin3Fill className='btn-new' onClick={deleteHandler}></RiDeleteBin3Fill>
      
      </div>
    </div>
  )
}

export default Task
