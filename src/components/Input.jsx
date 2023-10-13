import React, { useState } from 'react'
import {GrFormAdd} from 'react-icons/gr'

const Input = () => {

  const [data,setdata] = useState({
    task:"",
  });

  const clickHandler = async()=>{

    const  url = 'http://localhost:5000/api/v1/create';
    const res = await fetch (url,
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
  }

  const changeHandler = (event)=>{
    const {name,value} = event.target;
    setdata(prevState =>({
      ...prevState,
      [name]:value
    }));
    //console.log(event.target.value);
  }

  

  return (
    <div>

      <input type='text' placeholder='Enter Task' name='task' onChange={changeHandler}></input>
      <div className='add btn' onClick={clickHandler}><GrFormAdd></GrFormAdd></div>
      
    </div>
  )
}

export default Input
