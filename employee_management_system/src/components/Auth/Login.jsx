import React, { useState } from 'react'

const Login = () => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(" Email is: ", email);
    console.log(" Password is: ", password);

    setEmail("");
    setPassword("");  
  }
    
  return (
    <div className='flex items-center justify-center h-screen p-18 px-6 bg-gray-900'>
      <div className='border-2 border-red-600 border-opacity-50 rounded-lg shadow-lg  p-12 px-6'>
        <form 
        onSubmit={(e)=>{
          submitHandler(e)
        }}
        className='flex flex-col items-center justify-center p-2 gap-5'>
          <h1 className='text-2xl font-bold text-2xl font-bold mt-[-10px] p-4'>Login Page</h1>
          <input
          value={email}
           onChange={(e)=>{
            setEmail(e.target.value)
           }}
           required 
           className=' border-2 border-red-600 py-3 px-5 rounded-full bg-transparent text-white outline-none placeholder-gray-400 focus:placeholder-gray-600 focus:border-red-500' type="email" placeholder='Enter your email' />
          <input 
          value={password}
           onChange={(e)=>{
            setPassword(e.target.value)
           }}
          required 
          className=' border-2 border-red-600 py-3 px-5 rounded-full bg-transparent text-white outline-none placeholder-gray-400 focus:placeholder-gray-600 focus:border-red-500' type="password" placeholder='Enter your password' />
          <button className='bg-red-600 text-white border-2 border-red-600 py-3 px-5 rounded-full bg-transparent text-white outline-none placeholder-gray-400 focus:placeholder-gray-600 focus:border-red-500'>Login</button>
        </form>
      </div>
    </div>
  )   
}

export default Login
