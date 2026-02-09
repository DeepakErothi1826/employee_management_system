import React from 'react'

const Header = ({data}) => {
  console.log(data);
  
  return (
    <div className='flex items-center justify-between ' >
      <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-semibold'>{data.firstName}</span> 🤝 </h1>
      <button className='bg-red-500 text-white px-4 py-2 rounded-md'>Log Out</button>
    </div>
  )
}

export default Header
