import React, { useState } from 'react'
import {RxPencil2} from 'react-icons/rx'
import {toast} from 'react-hot-toast'
import {IoMdDoneAll} from 'react-icons/io'
import {ImCross} from 'react-icons/im'

const Task = (props) => {
    const task = props.task;
    const getdata = props.getdata
    const [clicked,setclicked] = useState(false);
    const [value,setvalue] = useState(task.task);
    const comp  = props.comp || false

    const undoHandler = async()=>{

      const id = task._id;
      const data = {
        taskid:id
      }

      const  url = 'https://todo-7j3i.onrender.com/api/v1/undoTask';
      await fetch (url,
        {
          method:'PUT',
          headers: {
            'Content-type': 'application/json'
          },
          mode:'cors',
          body:JSON.stringify(data)
        }
        )
        
        getdata();
        toast.error("Task Undo Successfully")

    }

    const deleteHandler = async()=>{
      const id = task._id;
      const data = {
        taskid:id
      }

      const  url = 'https://todo-7j3i.onrender.com/api/v1/deleteTask';
      await fetch (url,
        {
          method:'PUT',
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
        const api = 'https://todo-7j3i.onrender.com/api/v1/updateTask'
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
        <input type='text' value={value} onChange={changeHandler} onKeyDown={keyHandler} className='task-name input'></input>
      ) :  (<div className={ comp? 'task dashed' : 'task' }>{task.task}</div>)
    }
      
      <div className='btn-con'>

        <RxPencil2 className='btn-new' onClick={updateHandler}></RxPencil2>
        {
          comp ? <ImCross className='btn-new' onClick={undoHandler}></ImCross> : 
        
            <IoMdDoneAll className='btn-new' onClick={deleteHandler}></IoMdDoneAll>
        }
      </div>
    </div>
  )
}

export default Task
