import { useState,useEffect } from 'react'
import './App.css'
import Input from './components/Input'
import TaskCon from './components/TaskCon'
import CompletedTask from './components/CompletedTask'
import TasksPage from './components/TasksPage'
import Project from './components/Project'

function App() {


  const [data,setdata] = useState([])
  const [cdata , setcdata] = useState([])

    useEffect(  async () => {
        getdata();
    } ,[]);

    const getdata = async() =>{
        const url  = 'https://todo-7j3i.onrender.com/api/v1/getAllTask'
        const response = await fetch(url);
        const output = await response.json();
        const completedTasks = output.body.filter(task => task.completed === true);
        const incompleteTasks = output.body.filter(task => task.completed === false);
        setdata(incompleteTasks);
        setcdata(completedTasks)
        console.log(output.body);  
    }

  return (

    <div className='App'>
        <Project></Project>
    </div>

  )
}

export default App
