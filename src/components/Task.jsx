import React from 'react'
import {RxPencil2} from 'react-icons/rx'
import {RiDeleteBin3Fill} from 'react-icons/ri'

const Task = (props) => {
    const task = props.task;
    const getdata = props.getdata

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
    }

    const updateHandler = async()=>{
      //handle this 
    }


    return (
    <div className='task'>
      <div className='task-name'>{task.task}</div>
      <div className='btn-con'>

        <RxPencil2 className='btn-new' onClick={updateHandler}></RxPencil2>
        <RiDeleteBin3Fill className='btn-new' onClick={deleteHandler}></RiDeleteBin3Fill>
      
      </div>
    </div>
  )
}

export default Task
