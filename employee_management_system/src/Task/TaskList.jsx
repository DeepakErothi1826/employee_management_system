import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {
  console.log(data);
  
  return (
    <div id="taskLists" className='w-full overflow-x-auto flex items-center justify-start gap-5 flex-no-wrap py-1 mt-10 h-[55%] '>
       {data.tasks.map((e) => {
        if(e.active){
          return <AcceptTask />
        } else if(e.NewTask){
          return <NewTask  />
        } else if(e.CompleteTask){
          return <CompleteTask k />
        } else if(e.FailedTask){
          return <FailedTask  />
        }
       })}
    </div>
  )
}

export default TaskList
