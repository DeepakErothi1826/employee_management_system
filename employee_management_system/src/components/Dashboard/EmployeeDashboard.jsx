import React from 'react'
import Header from '../../Other/Header'
import TasklistNumber from '../../Other/TasklistNumber'
import TaskList from '../../Task/TaskList'

const EmployeeDashboard = ({data}) => {
  
  
  return (
    <div className='p-10 bg[#ICICIC] h-screen' >
      <Header data={data}/>
      <TasklistNumber data={data}/>
      <TaskList data={data}/>
    </div>
  )
}

export default EmployeeDashboard
