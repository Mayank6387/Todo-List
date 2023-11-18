"use client"
import React,{useState} from 'react'


function page() {
  const [task, setTask] = useState("");
  const[desc,setDesc]=useState("");
  const[mainc,setMainc]=useState([]);
  const submitHandler=(e)=>{
    e.preventDefault();
    setMainc([...mainc,{task,desc}]);
    setTask("");
    setDesc("");
  }
    let render=<h2>No Tasks Availiable</h2>
     
    const deleteHandler=(i: number)=>{
        let copytask=[...mainc];
        copytask.splice(i,1);
        setMainc(copytask);
    }
  

    if(mainc.length>0){
      render=mainc.map((t,i)=>{
        return (
          <>
          <li key={i} className='flex items-between justify-between mb-2'>
          <div className='flex items-between justify-between mt-2 mb-1 w-2/3'>
            <h5>Task - {t.task}</h5>
            <p>Description - {t.desc}</p>
          </div>
          <button className='border-red-500 bg-red-400 text-black border-4  text-center mx-1 my-2 rounded-md px-1 py-2 mb-2' onClick={()=>{deleteHandler(i)}}>Delete</button>
          </li>
          </>
        )
        });
    }
    
  return (
    <>
     <div className='h-5 text-center text-5xl font-semibold m-2 text-white text-decoration-line: underline'>ToDo List</div>
     <form className='flex justify-center' onSubmit={submitHandler}>
      <input type="text"  placeholder='Enter Task Here' className='border-purple-500 border-4  text-center mx-20 my-20 rounded-md px-16 py-2 text-black text-lg font-medium' value={task} onChange={(e)=>{
            setTask(e.target.value) 
      }}/>
      <input type="text"  placeholder='Enter Description Here' className='border-purple-500 border-4  text-center mx-20 my-20 rounded-md px-16 py-2  text-black text-lg font-medium' value={desc} onChange={(e)=>{
          setDesc(e.target.value)
      }}/>
      <button className='border-purple-500 border-4  text-center mx-20 my-20 rounded-md px-16 py-2'>Add Task</button>
     </form>
     <br />
     <div className='text-center text-xl font-medium text-black  bg-green-200 p-2'><ul>
      {render}</ul></div>
    </>
    )
}

export default page