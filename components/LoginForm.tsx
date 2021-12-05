import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { loginUser } from '../store/actions/actionsMain'
import Router from 'next/router'
const LoginForm = () => {
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
const dispatch = useDispatch()
  const handleSubmit = async(e:any)=>{
    e.preventDefault()
    let data = {
      email , password
    }
    const userData = await dispatch(loginUser(data))
    if (userData.payload.success ===true) {
      toast.success(userData.payload.message, {
        position: "bottom-left",
        autoClose: 10000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      })
      Router.push("/")
      localStorage.setItem('token' , userData.payload.token)
    }
    else{
      toast.error(userData.payload.message, {    
        position: "bottom-left",
        autoClose: 10000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      })
    }
  }
  return (
    <div className="container mx-auto">
      <form className="space-y-5 w-1/2 mx-auto mt-20 shadow-2xl p-5 text-blue-500" onSubmit={handleSubmit}>
        <div className="space-y-2">
          <label htmlFor="email">Enter the email</label>
          <input onChange={(e) => { setEmail(e.target.value) }} required className="w-full  outline-none px-3 py-4 rounded-2xl  text-blue-500 bg-gray-100" type="text" name="email" id="email" />
        </div>
        <div className="space-y-2">
          <label htmlFor="password">Enter the password</label>
          <input onChange={(e) => { setPassword(e.target.value) }} required className="w-full  outline-none px-3 py-4 rounded-2xl  text-blue-500 bg-gray-100" type="password" name="password" id="password" />
        </div>
        <button type="submit" className="bg-gray-100 px-8 py-3 rounded-xl text-blue-500">Register</button>
      </form>
    </div>
  )
}

export default LoginForm
