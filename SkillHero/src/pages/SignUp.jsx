import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom' 

export default function Login() {
    const [name,setName] = useState ("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const submitHandler = (e)=>{
        e.preventDefault();
    }
    
  return (
    <>
    <Navbar/>
      <h1 className='text-center text-6xl font-bold mt-5'>SignUp Here</h1>
      <form className='flex flex-col mx-7 my-9' onSubmit={submitHandler}>
      <input type="text"
        required
        value={name}
        className='p-2 my-1 border-[2px]'
        placeholder='username'
        onChange={(event)=>{
            setName(event.target.value)
            }} />

        <input type="text"
        required
        value={email}
        className='p-2 my-1 border-[2px]'
        placeholder='email'
        onChange={(event)=>{
            setEmail(event.target.value)
            }} />
        <input type="text"
        required
        value={password}
        className='p-2 my-1 border-[2px]'
        placeholder='password'
        onChange={(event)=>{
            setPassword(event.target.value)
            }} />
            <button type='Submit' className='border rounded-lg' onClick={()=>{
                alert("You are SignUp")
            }}>SignUp</button>
      <div className='flex justify-between mt-3'>
      <Link to={"/login"}>Login</Link>
      <Link to={"/forgot"}>ForgotPassword</Link>
      </div>
      </form>
    </>
  )
}
