import React from 'react'

const Login = () => {
  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='border-2 border-red-600 border-opacity-50 rounded-lg shadow-lg py-18 px-3'>
        <form className='flex flex-col items-center justify-center p-7 gap-5'>
          <h1 className='text-2xl font-bold text-2xl font-bold mt-[-10px]'>Login Page</h1>
          <input className=' border-2 border-red-600 py-3 px-5 rounded-full bg-transparent text-white outline-none placeholder-gray-400 focus:placeholder-gray-600 focus:border-red-500' type="email" placeholder='Enter your email' />
          <input className=' border-2 border-red-600 py-3 px-5 rounded-full bg-transparent text-white outline-none placeholder-gray-400 focus:placeholder-gray-600 focus:border-red-500' type="password" placeholder='Enter your password' />
          <button className='bg-red-600 text-white border-2 border-red-600 py-3 px-5 rounded-full bg-transparent text-white outline-none placeholder-gray-400 focus:placeholder-gray-600 focus:border-red-500'>Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login
