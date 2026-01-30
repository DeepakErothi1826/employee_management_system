import React from 'react'
import Header from '../../Other/Header'
import TasklistNumber from '../../Other/TasklistNumber'
import TaskList from '../../Task/TaskList'

const EmployeeDashboard = () => {
  return (
    <div className='p-10 bg[#ICICIC] h-screen' >
      <Header />
      <TasklistNumber/>
      <TaskList/>
    </div>
  )
}

export default EmployeeDashboard
