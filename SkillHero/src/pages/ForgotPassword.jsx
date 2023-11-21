import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom' 

export default function Login() {
    const [email,setEmail] = useState("")
    const submitHandler = (e)=>{
        e.preventDefault();
    }
    
  return (
    <>
    <Navbar/>
      <h1 className='text-center text-6xl font-bold mt-5'>Reset Password</h1>
      <form className='flex flex-col mx-7 my-9' onSubmit={submitHandler}>
        <input type="text"
        required
        value={email}
        className='p-2 my-1 border-[2px]'
        placeholder='email'
        onChange={(event)=>{
            setEmail(event.target.value)
            }} />
    <button type='Submit' className='border rounded-lg'>Reset Password</button>
      <div className='flex justify-between mt-3'>
      <Link to={"/signup"}>SignUp</Link>
      <Link to={"/login"}>Login</Link>
      
      </div>
      </form>
    </>
  )
}