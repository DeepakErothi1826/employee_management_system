import React from 'react'

const TasklistNumber = () => {
    return (
        <div className='flex mt-10 justify-between gap-4 screen' >
            <div className='h-45 w-[45%] bg-red-400 rounded-md flex flex-col items-center justify-center gap-2 ' >
                <h2 className='text-2xl font-semibold'>0</h2>
                <h3 className='text-xl font-medium'>New task</h3>
            </div>
            <div className='h-45 w-[45%] bg-green-400 rounded-md flex flex-col items-center justify-center gap-2 ' >
                <h2 className='text-2xl font-semibold'>0</h2>
                <h3 className='text-xl font-medium'>New task</h3>
            </div>
            <div className='h-45 w-[45%] bg-blue-400 rounded-md flex flex-col items-center justify-center gap-2 ' >
                <h2 className='text-2xl font-semibold'>0</h2>
                <h3 className='text-xl font-medium'>New task</h3>
            </div>
            <div className='h-45 w-[45%] bg-gray-400 rounded-md flex flex-col items-center justify-center gap-2 ' >
                <h2 className='text-2xl font-semibold'>0</h2>
                <h3 className='text-xl font-medium'>New task</h3>
            </div>
        </div>
    )
}

export default TasklistNumber
