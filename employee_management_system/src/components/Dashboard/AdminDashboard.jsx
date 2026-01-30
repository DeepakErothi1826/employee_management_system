import React from 'react'
import Header from '../../Other/Header'
import CreateTask from '../../Other/CreateTask'
import AllTask from '../../Other/AllTask'

const AdminDashboard = () => {
    return (
        <div className="min-h-screen w-full bg-gray-500 p-6">
            <Header />
            <CreateTask/>
            <AllTask />
        </div>

    )
}

export default AdminDashboard
