import React from 'react'

const CompleteTask = () => {
  return (
    <div className='flex-shrink-0 py-4 h-full w-[300px] bg-green-600 rounded-lg'>
        <div className='flex justify-between items-center p-2 mb-2'>
          <h3 className='bg-red-600 px-2 py-1 text-xs rounded-md'>High</h3>
          <h4 className='text-xs'>30 Jan 2026</h4>
        </div>
        <h2 className='text-white text-xl mt-1'>Make a youtube video for Valaorent</h2>
        <p className='text-xs py-2 px-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus accusantium quas nam ipsum dolorem iure neque autem fugiat aut, tempora reiciendis voluptates laudantium, veritatis vitae id! Facere  </p> 
        <div className='mt-4'>
            <button className='bg-red-500 text-white px-4 py-2 rounded-md'>Completed</button>
        </div>
      </div>
  )
}

export default CompleteTask
