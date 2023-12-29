import React, { useEffect, useState } from 'react'
import TasksPage from './TasksPage';

const Project = () => {

    const [projects,setProjects] = useState([]);
    const [data,setdata] = useState([])
    const [cdata , setcdata] = useState([])
    const [flag,setflag] = useState(false)
    const [id,setid] = useState(0);

    useEffect(()=>{
        getProjects();
    },[])

    const getProjects = async()=>{

        const url = 'http://localhost:5000/api/v1/project/get';
        const res = await fetch(url);
        const output = await res.json();
        setProjects(output.body);
        console.log(output.body)

    }

    const clickHandler = async(id)=>{

        const url = `http://localhost:5000/api/v1/project/${id}/getTasks`
        const res = await fetch(url);
        const output = await res.json();

        const completedTasks = output.body.tasks.filter(task => task.completed === true);
        const incompleteTasks = output.body.tasks.filter(task => task.completed === false);
        setdata(incompleteTasks);
        setcdata(completedTasks)
        console.log(output.body);
        setid(id);  
        setflag(true);
    }   

  return (
    <div>
      {
        flag ? <TasksPage cdata={cdata} data={data} getdata={clickHandler} id = {id}></TasksPage>  :
        
        Object.keys(projects).length === 0 ? <div>No data</div> :
        <div>{
        
            projects.map((project,key) => {
                return (
                    <div onClick={()=>{clickHandler(project._id)}}>{project.name}</div>
                )
            })

        }</div>

    }
    </div>
  )
}

export default Project
