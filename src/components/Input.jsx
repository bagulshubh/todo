import React, { useState } from 'react'
import {GrFormAdd} from 'react-icons/gr'

const Input = (props) => {

  const [data,setdata] = useState({
    task:"",
  });

  const getdata = props.getdata;
  const [value,setvalue] = useState("");

  const clickHandler = async()=>{

    const  url = 'http://localhost:5000/api/v1/create';
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
  }

  const changeHandler = (event)=>{
    const {name,value} = event.target;
    setdata(prevState =>({
      ...prevState,
      [name]:value
    }));
    //console.log(event.target.value);
    setvalue(event.target.value);
  }

  

  return (
    <div className='input-con'>

      <input type='text' placeholder='Enter Task' name='task' onChange={changeHandler} className='input' value={value}></input>
      <div className='add btn' onClick={clickHandler}><GrFormAdd></GrFormAdd></div>
      
    </div>
  )
}

export default Input
