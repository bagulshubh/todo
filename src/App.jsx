import { useState,useEffect } from 'react'
import './App.css'
import Input from './components/Input'
import TaskCon from './components/TaskCon'
import CompletedTask from './components/CompletedTask'

function App() {


  const [data,setdata] = useState([])
  const [cdata , setcdata] = useState([])
  const [loading,setloading] = useState(false);

    useEffect(  async () => {
        getdata();
    } ,[]);

    const getdata = async() =>{
        setloading(true);
        const url  = 'https://todo-7j3i.onrender.com/api/v1/getAllTask'
        const response = await fetch(url);
        const output = await response.json();
        const completedTasks = output.body.filter(task => task.completed === true);
        const incompleteTasks = output.body.filter(task => task.completed === false);
        setdata(incompleteTasks);
        setcdata(completedTasks)
        //console.log(output.body);  
        setloading(false);
    }

  return (
    <>


      {
        loading ?  <div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div> :    
         
         <div className='App'>
            <Input getdata={getdata}></Input>
            <TaskCon data={data} getdata={getdata}></TaskCon>
            <CompletedTask cdata={cdata} getdata= {getdata}></CompletedTask>
         </div>

      }

     
    </>

  )
}

export default App
