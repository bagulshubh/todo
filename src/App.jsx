import { useState,useEffect } from 'react'
import './App.css'
import Input from './components/Input'
import TaskCon from './components/TaskCon'

function App() {


  const [data,setdata] = useState([])

    useEffect(  async () => {
        getdata();
    } ,[]);

    const getdata = async() =>{
        const url  = 'http://localhost:5000/api/v1/getAllTask'
        const response = await fetch(url);
        const output = await response.json();
        setdata(output.body);
        console.log(output.body);  
    }

  return (

    <div className='App'>
      <Input getdata={getdata}></Input>
      <TaskCon data={data} getdata={getdata}></TaskCon>
    </div>

  )
}

export default App
