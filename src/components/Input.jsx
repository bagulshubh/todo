import React, { useState } from 'react'
import {GrFormAdd} from 'react-icons/gr'
import toast from 'react-hot-toast'

const Input = (props) => {

  const [data,setdata] = useState({
    task:"",
  });

  const getdata = props.getdata;
  const [value,setvalue] = useState("");

  const clickHandler = async()=>{

    const  url = 'https://todo-7j3i.onrender.com/api/v1/create';
    await fetch (url,
      {
        method:'POST',
        headers: {
          'Content-type': 'application/json'
        },
        mode:'cors',
        body:JSON.stringify(data)
      }
      )
    //console.log(value);
    getdata();
    setvalue("");
    toast.success("Task Created Successfully")
  }

  const changeHandler = (event)=>{
      if (event.key === 'Enter') {
        console.log("Enter Pressed")
        event.preventDefault();
        clickHandler();
      }
      else{    
        const {name,value} = event.target;
        setdata(prevState =>({
          ...prevState,
          [name]:value
        }));
        //console.log(event.target.value);
        setvalue(event.target.value);
    }
  }

  

  return (
    <div className='input-con'>

      <input type='text' placeholder='Enter Task' name='task' onChange={changeHandler} className='input' value={value} onKeyDown={changeHandler}></input>
      <div className='add btn' onClick={clickHandler}><GrFormAdd></GrFormAdd></div>
      
    </div>
  )
}

export default Input
